def Set_Volume():
    l = bytearray(7)
    l.set_uint8(0, 0x7E)
    l.set_uint8(1, 0x06)
    l.set_uint8(2, 0x00)
    l.set_uint8(3, 0x02)
    l.set_uint8(4, 0x00)
    l.set_uint8(5, Volume)
    l.set_uint8(6, 0xEF)
    serial.write_buffer(l)

def on_button_pressed_a():
    global Track_Num
    Track_Num = smarttools.string_to_int(smarttools.dec2_hex(randint(1, 11)))
    basic.show_string("" + str(Track_Num))
    Play_Track()
input.on_button_pressed(Button.A, on_button_pressed_a)

def Play_Track():
    m = bytearray(7)
    m.set_uint8(0, 0x7E)
    m.set_uint8(1, 0x03)
    m.set_uint8(2, 0x00)
    m.set_uint8(3, 0x02)
    m.set_uint8(4, 0x00)
    m.set_uint8(5, Track_Num)
    m.set_uint8(6, 0xEF)
    serial.write_buffer(m)
Track_Num = 0
Track_Num = 0
Volume = smarttools.string_to_int(smarttools.dec2_hex(10))
serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BAUD_RATE9600)
Set_Volume()
basic.show_icon(IconNames.TARGET)