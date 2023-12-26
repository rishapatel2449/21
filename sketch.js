
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	ground = new Ground(1300,600,400,20);
	right = new Ground(390,200,20,400);
	left = new Ground(10,200,20,400);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  right.show()
  left.show()
  
  drawSprites();
 
}



