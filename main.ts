function Set_Volume () {
    let l = control.createBuffer(7)
l.setUint8(0, 0x7E)
l.setUint8(1, 0x06)
l.setUint8(2, 0x00)
l.setUint8(3, 0x02)
l.setUint8(4, 0x00)
l.setUint8(5, Volume)
l.setUint8(6, 0xEF)
serial.writeBuffer(l)
}
input.onButtonPressed(Button.A, function () {
    Track_Num = smarttools.stringToInt(smarttools.dec2Hex(randint(1, 10)))
    basic.showString("" + (Track_Num))
    Play_Track()
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
let Track_Num = 0
Track_Num = 0
let Volume = smarttools.stringToInt(smarttools.dec2Hex(20))
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
Set_Volume()
basic.showIcon(IconNames.Happy)
