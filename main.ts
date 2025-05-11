/**
 * Speaker          MBit
 * 
 * ----------------------------- 
 * 
 *  5V               3.3/5V
 * 
 *  
 * 
 *  Gnd              GND
 * 
 *  
 * 
 *  TX               P1 - 16
 * 
 *  
 * 
 *  RX               p1 - 16
 * 
 *  
 * 
 *  Ensure TX / RX pin numbers are correct in ONSTART Block
 * 
 * Also make sure to set Number_Of_Tracks variable in ONSTART block to correct value
 */
/**
 * i should like to point out that the original code on which my translation is based was written by Thomas Burzy - https://github.com/FireMarshmellow
 * 
 * He did all the haed work in translationg the not so easy to understand DFRobot manual to somethng much more readable - so he deserves the vast majority of the credit!!
 * 
 * He has a very good Youtube channel as well - https://www.youtube.com/mellow_labs
 * 
 * ******************************************************************************
 * 
 * ALSO i had some excellent help from Bill Sievers so he deserves a mention as well!!
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
    if (Track_Num > Number_Of_Tracks) {
        Track_Num = 1
    }
    Track_Num = smarttools.stringToInt(smarttools.dec2Hex(Track_Num))
    basic.showString("" + (Track_Num))
    Play_Track()
})
function Pause_Play () {
    let q = control.createBuffer(7)
q.setUint8(0, 0x7E)
q.setUint8(1, 0x0E)
q.setUint8(2, 0x00)
q.setUint8(3, 0x02)
q.setUint8(4, 0x00)
q.setUint8(5, 0x00)
q.setUint8(6, 0xEF)
serial.writeBuffer(q)
}
function Stop_Play () {
    let n = control.createBuffer(7)
n.setUint8(0, 0x7E)
n.setUint8(1, 0x16)
n.setUint8(2, 0x00)
n.setUint8(3, 0x02)
n.setUint8(4, 0x00)
n.setUint8(5, 0x00)
n.setUint8(6, 0xEF)
serial.writeBuffer(n)
}
function Next_Track () {
    let m = control.createBuffer(7)
m.setUint8(0, 0x7E)
m.setUint8(1, 0x01)
m.setUint8(2, 0x00)
m.setUint8(3, 0x02)
m.setUint8(4, 0x00)
m.setUint8(5, 0x00)
m.setUint8(6, 0xEF)
serial.writeBuffer(m)
}
input.onButtonPressed(Button.AB, function () {
    Volume = smarttools.stringToInt(smarttools.dec2Hex(5))
})
function Play_Track () {
    let o = control.createBuffer(7)
o.setUint8(0, 0x7E)
o.setUint8(1, 0x03)
o.setUint8(2, 0x00)
o.setUint8(3, 0x02)
o.setUint8(4, 0x00)
o.setUint8(5, Track_Num)
o.setUint8(6, 0xEF)
serial.writeBuffer(o)
}
input.onButtonPressed(Button.B, function () {
    Stop_Play()
})
function Random_Play () {
    let p = control.createBuffer(7)
p.setUint8(0, 0x7E)
p.setUint8(1, 0x18)
p.setUint8(2, 0x00)
p.setUint8(3, 0x02)
p.setUint8(4, 0x00)
p.setUint8(5, 0x00)
p.setUint8(6, 0xEF)
serial.writeBuffer(p)
}
function Resume_Play () {
    let r = control.createBuffer(7)
r.setUint8(0, 0x7E)
r.setUint8(1, 0x0D)
r.setUint8(2, 0x00)
r.setUint8(3, 0x02)
r.setUint8(4, 0x00)
r.setUint8(5, 0x00)
r.setUint8(6, 0xEF)
serial.writeBuffer(r)
}
function Previous_Track () {
    let s = control.createBuffer(7)
s.setUint8(0, 0x7E)
s.setUint8(1, 0x02)
s.setUint8(2, 0x00)
s.setUint8(3, 0x02)
s.setUint8(4, 0x00)
s.setUint8(5, 0x00)
s.setUint8(6, 0xEF)
serial.writeBuffer(s)
}
let Volume = 0
let Number_Of_Tracks = 0
let Track_Num = 0
// Make sure to set this to the maximum track number stored on the device you wish to use
Number_Of_Tracks = 0
Track_Num = 0
basic.showIcon(IconNames.No)
Volume = smarttools.stringToInt(smarttools.dec2Hex(10))
serial.redirect(
SerialPin.P16,
SerialPin.P15,
BaudRate.BaudRate9600
)
Set_Volume()
basic.showIcon(IconNames.Tortoise)
