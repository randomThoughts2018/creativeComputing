var fly;
var sam;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  fly = new Bug(width/2, height/2);
  sam = new Bug(100,100);
}

function draw() {
  // put drawing code here
  background(255);

  fly.update();
  fly.draw();

  sam.update()
  sam.draw();
}

function Bug(startX, startY){
    this.x = startX; 
    this.y = startY;
    this.diameter = random(10,100);
    this.speed = random(2,10);

    this.draw = function(){
        fill(0);
        noStroke();
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.update = function(){
        this.x += random(-this.speed,this.speed);
        this.y += random(-this.speed,this.speed);
    }
}