const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var test,ground
var bird,log,pig 

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  box1=new Box(200,200,50,50)
  ground= new grClass(600,590,1200,20)
  bird= new birdClass(50,500,100,20)
  log= new logClass(400,40,200,PI/2)
  pig= new pClass(60,50)
console.log(pig)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    ground.display();
    bird.display();
    pig.display();
    log.display(); 
  }