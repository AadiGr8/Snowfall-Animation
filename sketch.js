const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint; 

var snow;
var snowImg;
var girl, girlImg;
var boy, boyImg;

function preload() {
  snowImg = loadImage("snow1.jpg");
  boyImg = loadAnimation("6.png","7.png","8.png");
  girlImg = loadAnimation("2.png","3.png","4.png");

}


function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  snow = new Snow(random(100,1500),0);

  boy = createSprite(300,600,20,20);
  boy.addAnimation("faltu",boyImg);
  boy.frameDelay = 4;
  boy.scale=2;
  
  girl = createSprite(1300,600,20,20);
  girl.addAnimation("fake",girlImg);
  girl.frameDelay = 6;
  girl.scale=2;

}

function draw() {
  background(snowImg);  
  drawSprites();
  
  Engine.update(engine);

for(i=0; i<100; i++){
  snow.display();
}
  drawSprites();
}