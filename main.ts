radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    }
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Asleep)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Skull)
    }
    if (receivedNumber == 4) {
        basic.showIcon(IconNames.Surprised)
    }
    if (receivedNumber == 4) {
        basic.showIcon(IconNames.Rabbit)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Asleep)
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        radio.sendNumber(3)
        basic.showIcon(IconNames.Skull)
    }
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P1)) {
        radio.sendNumber(4)
        basic.showIcon(IconNames.Surprised)
    }
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        radio.sendNumber(5)
        basic.showIcon(IconNames.Rabbit)
    }
})
