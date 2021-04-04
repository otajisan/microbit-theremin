let switch_on = false
function change_switch () {
    if (switch_on) {
        switch_on = false
    } else {
        switch_on = true
    }
}
input.onButtonPressed(Button.A, function () {
    change_switch()
})
input.onButtonPressed(Button.B, function () {
    change_switch()
})
basic.forever(function () {
    if (switch_on) {
        if (input.lightLevel() > 0) {
            music.playTone(input.lightLevel(), music.beat(BeatFraction.Whole))
        } else {
            music.rest(music.beat(BeatFraction.Sixteenth))
        }
    }
})
