var mouseXPositions = [];
var current =0;
var total = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background(0);
  stroke(255);

  for(var i=0; i < mouseXPositions.length; i++){
    line(mouseXPositions[i], 0, mouseXPositions[i], height);
  }

  mouseXPositions[current] = mouseX;
  current++;

  if (current > total){
    current = 0;
  }
}