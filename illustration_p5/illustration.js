// illustration.js

var cookieImg;
var mouseeImg;
var backgroundImg;
var cakeImg;
var pizzaImg;
var hotdogImg;
var pancakesImg;
var mouseWasPressed;

var cakeY = -0;
var pizzaY = 0;
var hotdogY = 0;
var pancakesY = 0;
var cookieY = 0;

function preload() {
  cookieImg = loadImage("images/cookie.png");
	mouseeImg = loadImage("images/mousee.png");
	backgroundImg = loadImage("images/background.png");
  cakeImg = loadImage("images/cake.png");
  pizzaImg = loadImage("images/pizza.png");
  hotdogImg = loadImage("images/hotdog.png");
  pancakesImg = loadImage("images/pancakes.png");
}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(0, 0, 0);
	//put background here
	image(backgroundImg,0,0);
	image(mouseeImg, mouseX, mouseY);

   //animate the food
	image(pizzaImg, 300, pizzaY);
image(pizzaImg, 500, pizzaY + 60);
  pizzaY += 0.8;
	if (pizzaY > height) {
		pizzaY = -100;
	}

	cakeY += 0.5;
	if (cakeY > 800) {
	   cakeY = -200;
	}
  image(cakeImg, 400, cakeY);
  image(cakeImg, 100, cakeY + 80);

  image(hotdogImg, 200, hotdogY);
image(hotdogImg, 700, hotdogY + 90);
  hotdogY += 0.8;
	if (hotdogY > height) {
		hotdogY = -100;
	}

    image(cookieImg, 500, cookieY);
  image(cookieImg, 40, cookieY + 60);
    cookieY += 0.8;
  	if (cookieY > height) {
  		cookieY = -100;
  	}
    image(pancakesImg, 600, pancakesY);
  image(pancakesImg, 20, pancakesY + 60);
    pancakesY += 0.8;
  	if (pancakesY > height) {
  		pancakesY = -100;
  	}
}
