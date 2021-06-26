var gardenImage;
var cat;
var mouse;
var cat1, mouse1;
var cat2, cat3, mouse3, mouse2;
function preload() {
    //load the images here
   gardenImage = loadImage("garden.png");
   cat1 = loadImage("cat1.png")
   mouse1 = loadImage("mouse1.png")
   cat2 = loadAnimation("cat2.png","cat3.png")
   mouse2 = loadAnimation("mouse2.png","mouse3.png")
   cat3 = loadAnimation("cat4.png")
   mouse3 = loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
 cat=createSprite(900,500)
 mouse = createSprite(200,500)
 cat.addImage(cat1)
mouse.addImage(mouse1)
cat.scale = 0.2
mouse.scale=0.15
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2-mouse.width/2){
cat.velocityX = 0
cat.addAnimation("catStop",cat3)
cat.changeAnimation("catStop")
mouse.addAnimation("mouseStop",mouse3)
mouse.changeAnimation("mouseStop")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("catRunning",cat2)
    mouse.addAnimation("mouseTeasing",mouse2)
    cat.changeAnimation("catRunning")
    mouse.changeAnimation("mouseTeasing")
}

}
