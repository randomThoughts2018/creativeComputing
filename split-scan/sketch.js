var img;
var center;
var s = 256;

var draw_position_x = 0;


function preload(){
    img = loadImage("sagrada.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(0);
  stroke(255,0,0);
  strokeWeight(2);
  center = width/2;

  //we resize the image to be of sxs
  img.resize(s,s);
  img.loadPixels();
}

function draw() {
  //background(0);
  var mx = constrain(mouseX, center-s/2, center+s/2);

  var x = map(mx, center - s/2, center+s/2, s,0);
  x = floor(x);

  for (var y=0; y < height; y++){
    var c = img.get(x,y);
    set(draw_position_x, y, c);
  }

  updatePixels();

  // show thumnail
  image(img, mx, height-s/2);
  line(width/2, height-s, width/2, height);

  //connect
  line(width/2, height-s, draw_position_x, s);

  //loop back around 
  draw_position_x++;
  if(draw_position_x >= width){
    draw_position_x = 0;
  }
}