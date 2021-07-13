const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var width
var engine,world
var divisions = [];
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  //Matter.Engine.create();
  engine = Engine.create();
    world = engine.world;
 //createSprite(400, 200, 50, 50);

 
for(var a = 40; a <=width-10; a=a+50 ){
  
  plinkos.push(new Plinko(a,200,10))
  
}
for(var x = 15; x <=width-5; x=x+50 ){
  
  plinkos.push(new Plinko(x,75,10))
  
}
for(var k = 0; k<=width; k = k+80 ){
  divisions.push(new Division(k,height - divisionHeight/2 , 10, divisionHeight))
  
}


ground = new Ground(240,800,480,10)
  
}


function draw() {
  background("black");  
 Engine.update(engine);
 
  
 if(frameCount%60 === 0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));

}
for(var j = 0; j<particles.length; j++){
  particles[j].display();
}
for(var k = 0; k<divisions.length; k++){
  divisions[k].display();
}
for(var a = 0; a<divisions.length; a++){
  //console.log("kpop")
  plinkos[a].display();
}
 
for(var x = 0; x<divisions.length; x++){
  //console.log("lol")
  plinkos[x].display();
}
 
  ground.display();
  drawSprites();
}

