basic.forever(function () {
    if (input.lightLevel() > 0) {
        music.playTone(input.lightLevel(), music.beat(BeatFraction.Whole))
    } else {
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
