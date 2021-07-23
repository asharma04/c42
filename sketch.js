var spacebg

var spacecraft1,spacecraft2,spacecraft3,spacecraft4

var isspng

var iss
var spacecraft
var hasDocked = false



function preload (){

  spacebg = loadImage("spacebg.jpg")
  spacecraft1 = loadImage("spacecraft1.png")
  spacecraft2 = loadImage("spacecraft2.png")
  spacecraft3 = loadImage("spacecraft3.png")
  spacecraft4 = loadImage("spacecraft4.png")
  isspng = loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(330, 200, 50, 50);
  
  iss.addImage(isspng)
  iss.scale = .5

  spacecraft = createSprite(285,280)
  spacecraft.addImage(spacecraft1)
  spacecraft.scale = .15
}

function draw() {
  background(spacebg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)
    if(keyDown("up")){
      spacecraft.y = spacecraft.y-2
      spacecraft.addImage(spacecraft2)
    }

    if(keyDown("down")){
      spacecraft.y = spacecraft.y+2
      spacecraft.addImage(spacecraft1)
    }

    if(keyDown("left")){
      spacecraft.x = spacecraft.x-2
      spacecraft.addImage(spacecraft4)
    }

    if(keyDown("right")){
      spacecraft.x = spacecraft.x+2
      spacecraft.addImage(spacecraft3)
    }
  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked = true
    fill("white")
    text("docking Successful",200,300)
  }
  drawSprites();
}