let xPos = 50;
let yPos = 50;
let yFart = 1;
let xHinder = innerWidth;
let hinderh = 300;
let hinderB = 60;


function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(innerWidth,innerHeight)
}

function draw() {
  // put drawing code here
  background("lightblue");
  ellipse(xPos,yPos,50,50);
  rect(xHinder, 0,hinderB,hinderh)
  rect(xHinder, innerHeight-250,hinderB,hinderh)
  yPos = yPos + yFart;
  yFart= yFart + 1;

  xHinder= xHinder - 3;

  if(xHinder<0){
    xHinder=innerWidth;
}
  if(xPos>xHinder && xPos < xHinder + hinderB && yPos <hinderh){
    alert("Du er død!")
  }

  if(xPos>xHinder && xPos < xHinder + hinderB && yPos >innerHeight-hinderH){
    alert("Du er død!")
  }

}
window.onkeydown = hopp;

function hopp(){
  yFart = -10;
}
