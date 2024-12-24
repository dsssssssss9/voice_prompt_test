def on_button_pressed_a():
    Play_Track()
input.on_button_pressed(Button.A, on_button_pressed_a)

def Play_Track():
    l = bytearray(7)
    l.set_uint8(0, 0x7E)
    l.set_uint8(1, 0x03)
    l.set_uint8(2, 0x00)
    l.set_uint8(3, 0x02)
    l.set_uint8(4, 0x00)
    l.set_uint8(5, Track_Num)
    l.set_uint8(6, 0xEF)
    serial.write_buffer(l)
serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BAUD_RATE9600)
Track_Num = smarttools.string_to_int(smarttools.dec2_hex(10))
basic.show_icon(IconNames.YES)

def on_forever():
    pass
basic.forever(on_forever)
