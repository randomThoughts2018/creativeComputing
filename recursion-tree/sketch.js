
var dotSize = 9;
var angleOffsetA;
var angleOffsetB;


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(0);
    frameRate(1); // redraw the tree once every second

    angleOffsetA = radians(1.5);
    angleOffsetB = radians(50);
  
}

function draw() {
  background(255);
  seed1(dotSize, radians(270), width/2, height); // start the tree
}

function seed1(dotSize, angle, x, y){

    if(dotSize > 1.0){

        var r = random(0,1.0);

        // 98% chance this will happen
        if (r > 0.02){
            ellipse(x,y, dotSize, dotSize);
            var newX = x + cos(angle) * dotSize;
            var newY = y + sin(angle) * dotSize;
            seed1(dotSize * 0.99, angle - angleOffsetA, newX, newY);
        }
        else {
            ellipse(x, y, dotSize, dotSize);
            var newX = x + cos(angle);
            var newY = y + sin(angle);
            seed2(dotSize*0.99, angle + angleOffsetA, newX, newY);
            seed1(dotSize*0.60, angle + angleOffsetB, newX, newY);
            seed2(dotSize*0.50, angle - angleOffsetB, newX, newY);
        }
    }
}

function seed2(dotSize, angle, x, y){

    if (dotSize > 1.0){

        var r = random(0,1.0);

        // 95% of the time this should happen
        if(r > 0.05){
            ellipse(x,y,dotSize,dotSize);
            var newX = x + cos(angle) * dotSize;
            var newY = y + sin(angle) * dotSize;
            seed2(dotSize * 0.99, angle + angleOffsetA, newX, newY);
        }
        else {
            ellipse(x,y,dotSize,dotSize);
            var newX = x + cos(angle);
            var newY = y + sin(angle);
            seed1(dotSize*0.99, angle + angleOffsetA, newX, newY);
            seed2(dotSize*0.60, angle + angleOffsetB, newX, newY);
            seed1(dotSize*0.50, angle - angleOffsetB, newX, newY);
        }

    }
}

function mousePressed(){
    background(255, 45);
    seed1(dotSize, radians(270), mouseX, height); // start the tree
}