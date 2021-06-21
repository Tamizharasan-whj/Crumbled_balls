
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var DustbinWall,DustbinWall1;
var ball;
var ground,ground1;

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var Ball_options = {
    airResistance:0.2,
     
  }
	

	
	ground = new Ground(width/2,475,width,20);
	
    DustbinWall = new Ground(600,400,15,150);
    DustbinWall1 = new Ground(800,400,15,150);


    ball = Bodies.circle(100,100,15,Ball_options);
    World.add(world,ball);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
   DustbinWall.display();
  DustbinWall1.display();
//  ball.display();
  ellipse(ball.position.x,ball.position.y,20)



}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
  Matter.Body.setVelocity(ball,{x:10,y:-30});
    console.log("keyPressed")
  }
}

