var Gamestate=0

function preload(){
  battlebg=loadImage("battle bg.PNG")
  hero=loadImage("the hero.PNG")
  Hostage=loadImage("hostage.PNG") 
  Obstacle=loadImage("obstacle.PNG")
}
function setup(){
  createCanvas(1000,1000)
  input=createInput("Your name")
  input.position(400,200)
  cloudsGroup=createGroup()
  button=createButton("PLAY")
  button.position(600,200)
  player=createSprite(30,150,40,20)
  player.addImage(hero)
  player.visible=false
  player.scale=0.5
  hostage=createSprite(900,150,40,20)
  hostage.addImage(Hostage)
  hostage.visible=false
  hostage.scale=0.5

  button.mousePressed(()=>{input.hide()
  button.hide()
  Gamestate=1
  })
}

function draw(){background(battlebg)
if(Gamestate===1){player.visible=true 
  hostage.visible=true
  fill("white")
  textSize(20)
  text("To Rescue the Hostage Click on the start button",200,200)

  Button1=createButton("Start")
  Button1.position(200,100)
  Button1.mousePressed(()=>{
    Button1.hide()
    Gamestate=2
  })
}
  if(Gamestate===2){hostage.visible=false 
  spawnClouds()
  }


drawSprites()
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(100,600));
    cloud.addImage(Obstacle);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    
    
    //adding cloud to the group
   cloudsGroup.add(cloud);
    }
}
