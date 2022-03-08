const Engine = Matter.Engine; // módulo de física
const World = Matter.World; //módulo do mundo
const Bodies = Matter.Bodies; //Módulo para criar corpos
const Body = Matter.Body; //Módulo para setar propriedades e funções aos corpos

var engine;
let world;

var ball;
var ground;
var rock;
var fan;
var angle=60;
var wallT,wallL,wallR,wallB;

var fan2


function setup() {
  createCanvas(600,600)

  //criando a física
  engine = Engine.create();
  //criando o mundo
  world = engine.world;

  //propriedades dos corpos
  var ground_options={
    isStatic:true
  }

  var ball_options={
    restitution:1,
    density:1,
    frictionAir:0.005
  }

  var rock_options={
    restitution: 0.20,
    density:20
  }
  //criando um corpo circular
  ball = Bodies.circle(300,60,50,ball_options)
  World.add(world,ball);//adicionando o corpo ao mundo

  //criando um corpo retangular
  ground = Bodies.rectangle(500,490,300,20,ground_options);
  World.add(world,ground);
  
  //criando um corpo circular para a pedra
  rock = Bodies.circle(400,20,80,rock_options)
  World.add(world,rock)

  //criando um corpo retangular para o fan
  fan = Bodies.rectangle(450,300,150,20,ground_options)
  World.add(world,fan);

  wallB = new Wall(300,590,600,20);
  wallT = new Wall(300,10,600,20);
  wallR = new Wall(590,300,20,600);
  wallL = new Wall(10,300,20,600);

  fan2 = new Fan(300,300,150,20,angle)
  
   

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
 background(0);

 Engine.update(engine);

 //exibindo o objetos bola na tela
 ellipse(ball.position.x,ball.position.y,50,50);

 //exibindo o objeto pedra na tela
 ellipse(rock.position.x,rock.position.y,80,80);

 //exibindo o solo na tela
 rect(ground.position.x,ground.position.y,300,20);

 fan2.display();

 //funcão para girar um corpo na tela
 Matter.Body.rotate(fan,angle)

 //girando um rect na tela
 push()
 translate(fan.position.x,fan.position.y)
 rotate(angle);
 //exibindo o fan na tela
 rect(0,0,150,20);
 pop()
 angle = angle+1

 wallB.display();
 wallT.display();
 wallR.display();
 wallL.display();
  
}

