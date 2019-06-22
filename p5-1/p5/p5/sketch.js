function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(400,400)
}

function draw() {
  // put drawing code here
  background("yellow");
  triangle(30, 75, 60, 20, 86, 75);
  fill("red");
  rect(30,75,55, 55);
  fill("lightblue");
  rect(40,105,10,23); //Dør
  rect(60,105,10,10); //Vindu
}
