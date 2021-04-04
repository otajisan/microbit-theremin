switch_on = False

def on_button_pressed_a():
    global switch_on
    switch_on = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if switch_on == False:
        return
    if input.light_level() > 0:
        music.play_tone(input.light_level(), music.beat(BeatFraction.WHOLE))
    else:
        music.rest(music.beat(BeatFraction.SIXTEENTH))
basic.forever(on_forever)
