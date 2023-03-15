alert("dshfjzsaem");

let CanW = 1000;
let CanH = 600;
function setup(){
createCanvas(CanW, CanH);
frameRate(60);
textSize(24);
} 
let Planet = function(name, r, mass){
this.name = name;
this.r = r;
this.mass = mass;
}

Planet.prototype.draw = function(x, y) {
//fill (20, 255, 80);
ellipse(x, y, this.r, this.r);
fill(255, 255, 255);
text(this.name + "(" + Math.round(x, 1) + "; " + Math.round(y, 1) + ")", x, y);

}


let earth = new Planet("Twoja mama", 100, 1);
let sat = new Planet("UY Scuti", 30, 1);

let xPos = 400;
let yPos = 200;
let xPos1 = xPos;
let yPos1 = yPos;


/*let movement = function(ax, ay, vx, vy, xx, yy){
	xx += vx;
	yy += vy;
	vx += ax;
	vy += ay;
}*/

let velX = 0.5;
let velY = -1.25;
let ax = 0;
let ay = 0;
let r = null;
let ac = 0;

let x1Pos = CanW / 2;
let y1Pos = CanH / 2;

let vel1X = -0.1;
let vel1Y = 0.25;
let a1x = 0;
let a1y = 0;
let a1c = 0;
function draw(){
background(0, 0, 102); 
fill (6, 204, 42);
earth.draw(x1Pos, y1Pos);
fill(250, 210, 7);
sat.draw(xPos, yPos);

velX += ax;
velY += ay;
xPos += velX;
yPos += velY;
vel1X += a1x;
vel1Y += a1y;
x1Pos += vel1X;
y1Pos += vel1Y;
//velX += ax / 2;
//velY += ay / 2;


r = dist(xPos, yPos, x1Pos, y1Pos);
//alert(r);
ac = -300 / (r ** 2);
ax = ac * ((xPos - x1Pos) / r);
ay = ac * ((yPos - y1Pos) / r);

a1c = 60 / (r ** 2);
a1x = a1c * ((xPos - x1Pos) / r);
a1y = a1c * ((yPos - y1Pos) / r);

//movement(1, 1, velX, velY, xPos, yPos);

if(xPos > CanW || xPos < 0 || yPos > CanH || yPos < 0){
	xPos = xPos1;
	yPos = yPos1;
	x1Pos = CanW / 2;
	y1Pos = CanH / 2;

}
}