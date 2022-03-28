const Engine =Matter.Engine; //Crear espacio de nombre para Engine
const World = Matter.World; //Crear espacio de nombre para World
const Bodies = Matter.Bodies; //Crear espacio de nombre para Bodies
const Body = Matter.Body; //Crear espacio de nombre para Body
var fan1,fan2,fan3,fan4;
var btn2;
 

function setup() {
  createCanvas(400,400);
                         
   engine = Engine.create(); //crear engine
   world =engine.world;//Agregar world a engine
   btn2 = createImg('up.png'); 
   btn2.position(20,30);
    btn2.size(50,50); 
    btn2.mouseClicked(vForce);
  
   var ball_options = {
    restitution: 0.95, // para rebotar
    frictionAir:0.01 
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
 fan1= new Rectangulos(25,30,50,30);
 fan2= new Rectangulos(60,40,50,30);
 fan3= new Rectangulos(80,50,50,30);
 fan4= new Rectangulos(25,70,50,30);
 
 ground = Bodies.rectangle(200,390,400,20,ground_options);//crear un fondo
 World.add (world,ground);//agregarlo a world
 ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  fan1.show();
  fan2.show();
  fan3.show();
  fan4.show();

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 


  
  
}

function vForce() { Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); }