const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine , world;
var a;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
var ground_options={
  isStatic:true
}

  a=Bodies.circle(200,100,20);
  World.add(world,a);
ground =Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);
}

function draw() {
  background(255,255,255); 
  Engine . update (engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(a.position.x,a.position.y,20,20);
  drawSprites();
}