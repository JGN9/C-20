const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo;
var bola;
var quadrado;
var retangulo;
let motor;
let mundo;
 

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

	motor = Engine.create();

	mundo = motor.world;
 

 
  

  var config_quadrado={
    restitution:0.7,
    friction:0.01,
    frictionAir:0.1
  }
  var config_retangulo={
    restitution:0.1,
    friction:1,
    frictionAir:0.3
  }
  var config_bola={
    restitution:0.5,
    friction:0.02,
    frictionAir:0.0
  }
  var config_solo={
    isStatic: true
  }

  solo = Bodies.rectangle(1, 380, 1000, 5, config_solo);
  World.add(mundo, solo); 

  bola=Bodies.circle(220,10,10,config_bola);
  World.add(mundo,bola); 
 

  quadrado = Bodies.rectangle(110,50,10,10, config_quadrado);
  World.add(mundo, quadrado); 
   


  retangulo = Bodies.rectangle(350,50,10,10, config_retangulo);
  World.add(mundo, retangulo); 

	Engine.run(motor);
}

function draw() {
  //fill;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0,160,0);
  Engine.update(motor);
  drawSprites();
  ellipse(bola.position.x,bola.position.y,20);
  rect(quadrado.position.x, quadrado.position.y, 29, 29);
  rect(retangulo.position.x, retangulo.position.y, 40, 29);
  rect(500, 390, 950, 5)
 
}



