const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1;
function preload(){
	dustbinImg=loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,480,1600,20);
	paper1 = new Paper(100,150);
	dust1 = new Dustbin(1000,460,200,20);
	dust2 = new Dustbin(900,410,20,120);
	dust3 = new Dustbin(1100,410,20,120);
	dust = createSprite(1000,400,20,20);  
	dust.addImage(dustbinImg);
	dust.scale = 0.5;
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground1.display();
  
  paper1.display();
  dust1.display();
  dust2.display();
  dust3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-80});
	}
}