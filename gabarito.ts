input.onButtonPressed(Button.A, function () {
    Sabrina.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Sabrina.move(1)
})
let Sabrina: game.LedSprite = null
Sabrina = game.createSprite(2, 4)
let Pinha = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(500)
    Pinha.change(LedSpriteProperty.Y, 1)
    if (Sabrina.isTouching(Pinha)) {
        game.gameOver()
    }
    if (Pinha.get(LedSpriteProperty.Y) == 4) {
        basic.pause(100)
        game.addScore(1)
        Pinha.set(LedSpriteProperty.Y, 0)
        Pinha.set(LedSpriteProperty.X, randint(0, 4))
    }
})
