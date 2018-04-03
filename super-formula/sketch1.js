var scaler = 150;
var m;
var n1;
var n2;
var n3;
var hr;
var c0;

function setup() {
    resetSketch();
    var button = createButton("reset")
    button.mousePressed(resetSketch);
    createCanvas(600, 400);
    noFill();
    frameRate(2);
}
function resetSketch(){
    var x = width / 2;
    var y = height / 2;
    m = map(noise(0,1),0,1,0,width);
    n1 = map(noise(0,1),0,1,0,height);
    n2 = map(noise(0,1),0,1,0,height);
    n3 = map(noise(0,1),0,1,0,height);
    hr = map(noise(0.001,1),0,1,0,height);
    c0 = new Creature(x, y / 2,m,n1,n2,n3,hr);
}
function draw() {
    background(0);
    c0.display();
    c0.detect();
}

function Creature(x, y,m,n1,n2,n3,hr) {
    this.x = x;
    this.y = y;
    this.m = random(m);
    this.n1= random(n1);
    this.n2= random(n2);
    this.n3= random(n3);
    this.hr = random(hr);
    this.sw = 1;
    this.display = function() {
    stroke(random(120), random(120), random(120), 127+127* sin(frameCount*this.hr));
    strokeWeight(this.sw);
    drawShape(width/2, height/2, this.m, this.n1, this.n2, this.n3)
    }
    this.detect = function(){
        if (dist(mouseX,mouseY, width/2, height/2) < scaler){
            //stroke to be 5
            this.sw =5;
        }else{
            this.sw =1;
        }
    }
}


function drawShape(x, y, m,n1,n2,n3) {
    push();
    translate(x, y);
    var newscaler = scaler;
    for (var s = 16; s > 0; s--) {
        beginShape();
        var mm = m + s;
        var nn1 = n1 + s;
        var nn2 = n2 + s;
        var nn3 = n3 + s;
        newscaler = newscaler * 0.98;
        var sscaler = newscaler;
        var points = superformula(mm, nn1, nn2, nn3);
        curveVertex(points[points.length - 1].x * sscaler, points[points.length - 1].y * sscaler);
        for (var i = 0; i < points.length; i++) {
        curveVertex(points[i].x * sscaler, points[i].y * sscaler);
        }
        curveVertex(points[0].x * sscaler, points[0].y * sscaler);
        endShape();
        }
        pop();
    }
function superformula(m, n1, n2, n3) {
    var numPoints = 360;
    var phi = TWO_PI / numPoints;
    var points = [];
    for (var i = 0; i <= numPoints; i++) {
        points[i] = superformulaPoint(m, n1, n2, n3, phi * i);
    }
    return points;
}

function superformulaPoint(m, n1, n2, n3, phi) {
    var r;
    var t1, t2;
    var a = 1,
    b = 1;
    var x = 0;
    var y = 0;
    t1 = cos(m * phi / 4) / a;
    t1 = abs(t1);
    t1 = pow(t1, n2);
    t2 = sin(m * phi / 4) / b;
    t2 = abs(t2);
    t2 = pow(t2, n3);
    r = pow(t1 + t2, 1 / n1);
    if (abs(r) === 0) {
        x = 0;
        y = 0;
    } else {
        r = 1 / r;
        x = r * cos(phi);
        y = r * sin(phi);
    }
    return new p5.Vector(x, y);
}