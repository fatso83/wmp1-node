# Node lib for Casio WMP1
> Simple client library for controlling the Casio WMP1.

## Installing

### Linux device permissions

Make the device writeable for everyone on your system to avoid needing `sudo`.

```
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="07cf", ATTRS{idProduct}=="3801", MODE="0666"' | sudo tee /etc/udev/rules.d/80-casio-wmp.rules
sudo udevadm control --reload-rules
```
