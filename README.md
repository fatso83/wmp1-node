# Node lib for Casio WMP1
> Simple client library for controlling the Casio WMP1.

# CAVEAT: this is not ready!
I have just started poking around with libusb. This is just my first commits. The original project from 2005 in C can be found at https://github.com/fatso83/casio-wmp1.

## Installing

### Linux device permissions

Make the device writeable for everyone on your system to avoid needing `sudo`.

```
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="07cf", ATTRS{idProduct}=="3801", MODE="0666"' | sudo tee /etc/udev/rules.d/80-casio-wmp.rules
sudo udevadm control --reload-rules
```
