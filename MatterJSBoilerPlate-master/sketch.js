
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var gameState = "startup"
var login = true;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;	

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  startup_img = loadImage("images/startup.gif")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  /*game = new Game();
  game.getState();
  game.start();*/
  next = createSprite(displayWidth/5,displayHeight/3);
  next.shapeColor("red");
}


function setup() {
	createCanvas(displayWidth-10,displayHeight-157);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //background(startup_img);
  
  if (login === false) {

  }
  drawSprites();

 if(gameState === 0){
	 fill("Yellow");
	 textSize(30);
	 text("PLAY ALONG",displayWidth/2.3,displayHeight/2.5);
 }
}



