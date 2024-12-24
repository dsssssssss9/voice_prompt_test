input.onButtonPressed(Button.A, function on_button_pressed_a() {
    Play_Track()
})
function Play_Track() {
    let l = control.createBuffer(7)
    l.setUint8(0, 0x7E)
    l.setUint8(1, 0x03)
    l.setUint8(2, 0x00)
    l.setUint8(3, 0x02)
    l.setUint8(4, 0x00)
    l.setUint8(5, Track_Num)
    l.setUint8(6, 0xEF)
    serial.writeBuffer(l)
}

serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate9600)
let Track_Num = smarttools.stringToInt(smarttools.dec2Hex(10))
basic.showIcon(IconNames.Yes)
basic.forever(function on_forever() {
    
})
