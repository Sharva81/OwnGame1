const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundimg;
var boss, bossimg;
var player1, player2, player3;
var player1img, player2img, player3img;

var bosshealth;
var health1;
var health2;
var health3;

function preload(){
  backgroundimg = loadImage("whitehatcustomback.jpeg");

  bossimg = loadImage("bossimg2.png");

  player1img = loadImage("attacker4.png");
  player2img = loadImage("rpgtank.png");
  player3img = loadImage("rpghealer.png");
  }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  boss = createSprite(200, 300, 100, 100);

  player1 = createSprite(450, 325, 100, 100);

  player2 = createSprite(550, 275, 100, 100);

  player3 = createSprite(650, 325, 100, 100);

  boss.addImage("bossplayer", bossimg);
  boss.scale= 0.1;

  player1.addImage("player1character", player1img);
  player1.scale = 0.3;

  player2.addImage("player2character", player2img);
  player2.scale = 0.7;

  player3.addImage("player3character", player3img);
  player3.scale = 0.3;

  bosshealth = 1000;

  health1 = 200;

  health2 = 500;

  health3 = 200;
}

function draw() {
  background(backgroundimg);  
  Engine.update(engine);

  boss.display();
  player1.display();
  player2.display();
  player3.display();

  

  //attacker's attack button

 if(keyDown("space")){
 bosshealth = bosshealth - 100;

 }

 if(keyDown("Q")){
  bosshealth = bosshealth - 50;

  }

  if(keyDown("E")){
    bosshealth = bosshealth - 20;
   
    }

    if(keyDown("1")){
      health1 = health1 + 60;
    }

    if(keyDown("2")){
      health2 = health2 + 60;
    }

    if(keyDown("3")){
      health3 = health3 + 100;
    }

    if(keyDown("space") || keyDown("Q") || keyDown("E") || keyDown("1") || keyDown("2") || keyDown("3")){
      
    }


 console.log(bosshealth);

 




  drawSprites();
}