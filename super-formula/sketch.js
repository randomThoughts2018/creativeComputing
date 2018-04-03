var scalar = 100;


var c0;
var c1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255, 120);
  c0 = new Creature(width/4, height/2);
  c1 = new Creature(3 * width/4, height/2);
}

function draw(){
    background(0);

    c0.detect();
    c0.display();
    c1.detect();
    c1.display();
}

function Creature(x,y){
    this.x =x;
    this.y=y;

    this.m = random(0,10);//2;
    this.n1 = random(1,100);//18;
    this.n2 = random(1,100);//1;
    this.n3 = random(1,100);//1;
    this.hr = random(0.1,0.2);
    this.hw = 1;

    this.display = function(){
        stroke(255, 127 + 127*sin(frameCount*this.hr));
        strokeWeight(this.hw);
        drawShape(this.x,this.y, this.m , this.n1, this.n2, this.n3);
    }

    this.detect = function(){
        if(dist(mouseX, mouseY, this.x, this.y) < scalar){
            //strokeWeight to be 2
            this.hw = 3;
        }
        else {
            //strokeWeight to be 1
            this.hw = 1;
        }
    }
}




function drawShape(x,y, m, n1, n2, n3) {

  push();
  translate(x,y);

  var newScalar = scalar;

  for(var s = 16; s > 0; s--){
    beginShape();

    var mm = m + s;
    var nn1 = n1 + s;
    var nn2 = n2 + s;
    var nn3 = n3 + s;
    newScalar = newScalar * 0.98;

    var sscalar = newScalar;

    var points = superformula(mm, nn1, nn2, nn3);

    curveVertex(points[points.length-1].x * sscalar, points[points.length-1].y * sscalar);
    for (var i=0; i < points.length; i++){
        curveVertex(points[i].x*sscalar, points[i].y * sscalar);
    }
    curveVertex(points[0].x * sscalar, points[0].y * sscalar);

    endShape();
  }
  pop();
}

function superformula(m, n1, n2, n3){
    var numPoints = 360;
    var phi = TWO_PI / numPoints;
    var points = [];

    for(var i = 0 ; i <= numPoints; i++){
        points[i] = superformulaPoints(m, n1, n2, n3, phi * i);
    }
    return points;
}

function superformulaPoints(m, n1, n2, n3, phi){
    var r;
    var t1, t2;
    var a=1, b=1;
    var x = 0;
    var y = 0;

    t1 = cos((m*phi)/4) / a;
    t1 = abs(t1);
    t1 = pow(t1,n2);

    t2 = sin((m*phi)/4) / b;
    t2 = abs(t2);
    t2 = pow(t2,n3);

    r = pow(t1+t2, 1/n1);

    if(abs(r) == 0){
        x = 0;
        y = 0;
    }
    else {
        r = 1/r;
        x = r*cos(phi);
        y = r*sin(phi);
    }

    return new p5.Vector(x,y);
}





