const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground2, ground3, ground4;
var paper;
var rect1, rect2, rect3;
var binImg, bin;
var launcher;

function preload(){

	binImg = loadImage("bin.png");

}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	bin = createSprite(860, 585, 30, 30);
	bin.addImage(binImg);
	bin.scale = 0.58;
	bin.visible = true;

	ground = new Ground(600,700,1200,50);
	ground2 = new Ground(10,354,50,640);
	ground3 = new Ground(1190,354,50,640);
	ground4 = new Ground(600,10,1200,50);
	rect1 = new Dustbin(925, 630, 15, 150);
	rect2 = new Dustbin(860, 670, 145, 15);
	rect3 = new Dustbin(797, 607, 15, 110);
	
	paper = new Paper(100,300,40);

	launcher = new Launcher(paper.body, {x: 400, y: 200});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  Engine.update(engine);

  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  launcher.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 38) {
		
		Matter.Body.applyForce(paper.body,paper.body.position, { x: 25, y: -25 });		
	}
}

function mouseDragged()
{
	Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
launcher.fly();
 
}



