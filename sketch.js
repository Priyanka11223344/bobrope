const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var ground1;
var roof1;
var rope1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    bob1 = new BobClass(480,400,50);
	bob2 = new BobClass(430,400,50);
	bob3 = new BobClass(380,400,50);
	bob4 = new BobClass(330,400,50);
	bob5 = new BobClass(280,400,50);
	roof1 = new Roof(380,200,300,30);
	rope1 = new Rope(bob1.body,roof1.body,{x:200, y:100});
  
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  background(225);
  

 bob1.display();
 roof1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
rope1.display();

}