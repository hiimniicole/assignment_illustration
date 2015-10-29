// illustration.js

var cookieImg;
var mouseeImg;
var backgroundImg;
var cakeImg;
var pizzaImg;
var hotdogImg;
var mouseWasPressed;
//if mouse
function preload() {
  cookeImg = loadImage("images/cookie.png");
	mouseeImg = loadImage("images/mousee.png");
	backgroundImg = loadImage("images/background.png");
  cakeImg = loadImage("images/cake.png");
  pizzaImg = loadImage("images/pizza.png");
  hotdogImg = loadImage("images/hotdog.png");
}


function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(0, 0, 0);
	//put background here
	image(backgroundImg,0,0);
	image(mouseeImg, mouseX, mouseY);
	//ellipse(50, 50, 50, 150);
	//if (mouseIsPressed)
//	image
}
