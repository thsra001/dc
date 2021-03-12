controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 8 . . . . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . 8 8 . . . 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.vy = 30
scene.cameraFollowSprite(mySprite)
