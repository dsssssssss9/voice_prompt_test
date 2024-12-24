input.onButtonPressed(Button.A, function () {
    Play_Track()
})
function Play_Track () {
    let l = control.createBuffer(8)
l.setUint8(0, 0x7E)
l.setUint8(1, 0x03)
l.setUint8(2, 0x00)
l.setUint8(3, 0x02)
l.setUint8(4, 0x00)
l.setUint8(5, 0x02)
l.setUint8(6, 5)
l.setUint8(7, 0xEF)
serial.writeBuffer(l)
}
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
let Track_Num = 1
basic.showIcon(IconNames.Tortoise)
basic.forever(function () {
	
})
