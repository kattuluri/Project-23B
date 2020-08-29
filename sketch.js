var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var drop1Body, drop2Body, drop3Body, drop1, drop1, drop3;
var gameState = 1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 800);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	drop1 = createSprite(615,760,100,10);
	drop1Body = Bodies.rectangle(615,760,100,10,{isStatic:true});
	drop1.shapeColor = "red";
	drop1.visible = false;
	World.add(world,drop1Body)
	
	drop2 = createSprite(580,740,30,50);
	drop2Body = Bodies.rectangle(580,740,30,50,{isStatic:true});
	drop2.shapeColor = "red";
	drop2.visible = false;
	World.add(world,drop2Body)

	drop3 = createSprite(660,740,30,50);
    drop3Body = Bodies.rectangle(660,740,30,50,{isStatic:true})
	drop3.shapeColor = "red"
	drop3.visible = false;
	World.add(world,drop3Body)

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	packageSprite=createSprite(width/2,200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	groundSprite=createSprite(600,780,800,20);
	groundSprite.shapeColor="tan";



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 780, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  textSize(21);
  text("Use Down Arrow to Drop the Package",210,100);
  if(packageSprite.isTouching(drop1)){
	Body.setStatic(packageBody,true);  
	gameState = 0;
  }
  drawSprites();
}



function keyPressed() { 
  if (keyCode === DOWN_ARROW ) {
	Matter.Body.setStatic(packageBody,false); 
	drop1.visible = true;
	drop2.visible = true;
	drop3.visible = true;
  }
} 
