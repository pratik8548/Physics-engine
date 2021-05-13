const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
var engine,world;
var groundobj,ballobj;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var groundoptions={
    isStatic:true
  }
  groundobj = Bodies.rectangle(200,380,400,20,groundoptions);
  World.add(world,groundobj);
  var balloptions={
    restitution:0.75
  }
  ballobj = Bodies.circle(150,300,15,balloptions);
  World.add(world,ballobj);
}

function draw() {
  Engine.update(engine);
  background(0);
  rectMode(CENTER) ;
  rect (groundobj.position.x,groundobj.position.y,400,20); 
  ellipseMode(RADIUS);
  ellipse(ballobj.position.x,ballobj.position.y,15,15);
  drawSprites();
}