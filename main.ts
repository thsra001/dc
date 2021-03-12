controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -30
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level6`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c c c c . . . . . . . . 
    . . . c f 8 8 8 9 9 9 9 . . . . 
    . . . c f 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . f f 8 8 8 f f 8 8 . . . 
    . . . . f f . . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 30
scene.cameraFollowSprite(mySprite)
forever(function () {
    mySprite.vx = 111
})
