joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("E")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("F")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("D")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("C")
})
joystickbit.initJoystickBit()
pins.analogWritePin(AnalogPin.P0, 429)
