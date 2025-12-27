scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hops_and_paws.vy == 0) {
        Hops_and_paws.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let Hops_and_paws: Sprite = null
scene.setBackgroundColor(9)
Hops_and_paws = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . . . f f . 
    f f f f f f f f f f f f f f 5 f 
    . . . . f f f f f f f f f f f f 
    . . . . f f f f f f f f f f . . 
    . . . . f . f . . . f . f . . . 
    . . . . f . f . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hops_and_paws, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Hops_and_paws.ay = 350
scene.cameraFollowSprite(Hops_and_paws)
