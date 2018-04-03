var FuturaHandwritten;

var sound;

function preload(){
  FuturaHandwritten = loadFont("FuturaHandwritten.ttf");

  sound = loadSound("bleu.mp3");
}

function setup() {
  createCanvas(900,600);
  textFont(FuturaHandwritten);
  textSize(20);
  //strokeWidth(4);
  sound.setVolume(0.5);
  sound.loop();
}

function draw() {
  background(255);
  text("Hello World Yo mama how are you !", mouseX, mouseY);
  text("Hello World, it is a beautiful day outsides !", mouseX, mouseY, 200, 200);
}

function mousePressed(){
    //sound.play();
}