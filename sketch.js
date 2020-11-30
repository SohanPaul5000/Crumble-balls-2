const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 
var ball, dustbin, ground; 
function setup() { 
 createCanvas(800, 700); 
 engine = Engine.create(); 
 world = engine.world; 
 //Create the Bodies Here. 
 ball = new Paper(100, 350); 
 ground = new Ground(400, 650, 800, 20); 
 dustbin = new Dustbin(600, 560, 20, 162); 
 Engine.run(engine); 
  
}

function keyPressed() { 
 if (keyCode === UP_ARROW) { 
 Matter.Body.applyForce(ball.body, ball.body.position, {x:140, y:-160} 
    )  } 
} 

function draw() { 
 rectMode(CENTER); 
 background(255); 
  
// keyPressed(); 
 ball.display(); 
 ground.display(); 
 fill('red'); 
 dustbin.display() 
 fill('gray'); 
 drawSprites(); 
}
