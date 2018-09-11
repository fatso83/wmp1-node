const usb = require("usb");
const d = (...args) => console.log(...args);
const vid = 0x07cf;
const pid = 0x3801;
const isWmp = d =>
  d.deviceDescriptor.idVendor === vid && d.deviceDescriptor.idProduct === pid;
const vendorString = "Casio Computer Co., Ltd";
const productString = "WMP-1 MP3-Watch";

usb.setDebugLevel(2); // 0-4
usb.on("attach", function(device) {
  if (isWmp(device)) d("Attached " + productString);
});

usb.on("detach", function(device) {
  if (isWmp(device)) d("Detached " + productString);
});

const device = usb.findByIds(vid, pid);

if (!device) {
  throw new Error("No device found");
}

//d(device.portNumbers);

d(device.open());
//d(device.interface(0));
//d("bNumConfigurations", device.deviceDescriptor.bNumConfigurations);
//d(".allConfigDescriptors", device.allConfigDescriptors);
//device.setConfiguration(1, callback)

// init_device() in the original usb_layer.c uses a libusb-0.1 function called usb_control_msg
// this is not present in the new code, but in the adapter code we find that
// we can use libusb_control_transfer
// this corresponds to the Node API method Device#controlTransfer()
//
// Device#controlTransfer(bmRequestType, bRequest, wValue, wIndex, data_or_length, callback(error, data))
// https://github.com/tessel/node-usb#controltransferbmrequesttype-brequest-wvalue-windex-data_or_length-callbackerror-data
//https://github.com/libusb/libusb-compat-0.1/blob/master/libusb/core.c#L878

d(device.close());
