/**
 * Speaker          MBit
 * 
 * 5V               3.3/5V
 * 
 * Gnd              GND
 * 
 * TX               P1 - 16
 * 
 * RX               p1 - 16
 * 
 * Ensure TX / RX pin numbers are correct in ONSTART Block
 */
function Set_Volume () {
    let l = control.createBuffer(7)
l.setUint8(0, 0x7E)
l.setUint8(1, 0x06)
l.setUint8(2, 0x00)
l.setUint8(3, 0x02)
l.setUint8(4, 0x00)
l.setUint8(5, 0x10)
l.setUint8(6, 0xEF)
serial.writeBuffer(l)
}
input.onButtonPressed(Button.A, function () {
    Track_Num += 1
    if (Track_Num > 3) {
        Track_Num = 1
    }
    Track_Num = smarttools.stringToInt(smarttools.dec2Hex(Track_Num))
    basic.showString("" + (Track_Num))
    Play_Track()
})
// Speaker          Mbit
// 
// 5V               3.3/5v
// 
// GND              GND
// 
// TX               RX     P1 - 15
// 
// RX               TX     P1 - 15
// 
// Ensure TX / RX Pins correct in the ONSTART Block
input.onButtonPressed(Button.AB, function () {
    Volume = smarttools.stringToInt(smarttools.dec2Hex(5))
})
function Play_Track () {
    let m = control.createBuffer(7)
m.setUint8(0, 0x7E)
m.setUint8(1, 0x03)
m.setUint8(2, 0x00)
m.setUint8(3, 0x02)
m.setUint8(4, 0x00)
m.setUint8(5, Track_Num)
m.setUint8(6, 0xEF)
serial.writeBuffer(m)
}
let Volume = 0
let Track_Num = 0
basic.showIcon(IconNames.No)
Volume = smarttools.stringToInt(smarttools.dec2Hex(10))
serial.redirect(
SerialPin.P16,
SerialPin.P15,
BaudRate.BaudRate9600
)
Set_Volume()
basic.showIcon(IconNames.Tortoise)
