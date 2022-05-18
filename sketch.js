const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, Base, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //crear el cuerpo base del jugador

var options = {
  isStatic: true
};

Base = Bodies.rectangle(200, 350, 180, 150, options);
World.add(world, Base);

  //crear el cuerpo del jugador

player = Bodies.rectangle(250, Base.position.y - 160, 50, 180, options);
World.add(world, player);

}

function draw() {
  background(backgroundImg);
  push();
  imageMode(CENTER);
  image(baseimage, Base.position.x, Base.position.y, 180, 150)
  image(playerimage, Base.position.x, Base.position.y - 150, 50, 180)
  pop();
  //mostrar la imagen del jugador utilizando la función image()

  //mostrar la imagen de la base del jugador utilizando la función image()


  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
