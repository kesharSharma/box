//name spacing or nicknaming
//const or constant means fixed value
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

//declaring variables for the ABG(angry birds game)
var engine, world;
var ground;
var box1;
var box2;

function setup() {
  //created a base for the game
  createCanvas(800,400);

  //created an engine from the main Matter.Engine class
  engine = Engine.create();
  //the world of ABG is same as engine's world
  world = engine.world;

  //creating objects out of their respective classes
  ground = new  Ground(400,350,800,15);
  box1 = new Box(200,300,50,80);
  box2 = new Box(235,50,50,50);
}

function draw() {
   // given the background
  background(0); 
  //to keep updating the engine 
  Engine.update(engine); 

  //to display the above created objects
  ground.display();
  box1.display();
  box2.display();
}