function Play_Track () {
    serial.writeString("[0x7E, 0x03, 0x00, 0x02, 0x00, Track_Num, 0xEF]")
}
function Set_Vol () {
    serial.writeString("[0x7E, 0x06, 0x00, 0x02, 0x00, Vol, 0xEF]")
}
serial.setBaudRate(BaudRate.BaudRate9600)
let Track_Num = 1
let Vol = 20
basic.forever(function () {
	
})
