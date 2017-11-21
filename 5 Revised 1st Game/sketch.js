
function setup(){


//createCanvas(640,360);

canvas = createCanvas(600,600);
// this is how u control position in p5.js 
canvas.position(100,100);
background(0);

fill(255);
text("Version 2 - P.5", 100,40);
text("Level 2",100,60);

fill(0,0,200);
text("Directions: Click all of the circles to finish the level", 0, 500);


for (var i = 0; i<10; i++){
	
fill(255,0,0);
fill(255);
var x = random(width);
var y = random(height);


ellipse(x,y, 30*2, 30*2);

}
}

function draw() {
fill((mouseX,mouseY),0,0);
  if (mouseIsPressed)
  	translate(mouseX, mouseY);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 20, 20, 80);
    rotate(PI/5);
  }

fill(255);
text("FLASH MOB", 20,40);    
   
  print(mouseIsPressed);
}






