var bg,bgImage
var door,doorImage,doorGroup
var ghost,ghostImage
var gameState='play'
function preload(){
  bgImage =loadImage('tower.png')
  doorImage=loadImage('door.png')
  ghostImage=loadImage('ghost-standing.png')
}

function setup(){
  createCanvas(600,600)
  bg=createSprite(300,300)
  bg.addImage(bgImage)
  bg.velocityY=2
  doorGroup=new Group()
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImage)
  ghost.scale=0.3
  
}

function draw(){
  background('yellow')
  if(gameState=='play'){
    
  
  if(bg.y>400){
    bg.y=300
  }
  if(keyDown('space')){
  ghost.velocityY=-5
 }
 ghost.velocityY=ghost.velocityY+0.5 
  if(keyDown('left')){
    ghost.x=ghost.x-3
  }
  if(keyDown('right')){
    ghost.x=ghost.x+3
  }
 spawnDoor()
     if(doorGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
    gameState='END'
  }
     drawSprites()
  }
 
 if(gameState=='END'){
 bg.velocityY=0
   textSize(30)
  stroke('white')
   fill('red')
   text('gameOver',230,250)
   
}
}
function spawnDoor(){
  if(frameCount%180==0){ 
  var door=createSprite(200,-10)
  door.x=Math.round(random(120,400))
  door.addImage(doorImage)
  door.velocityY=2
    doorGroup.add(door)
    door.lifetime=300
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1
}}

