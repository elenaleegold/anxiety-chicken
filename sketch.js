/// BUTTON CLASS

class Button{

var rectX, rectY;      // Position of square button
var rectSize;     // Diameter of rect
color rectColor;
color rectHighlight;
color currentColor;
var rectOver = false;
var circleOver = false;

Button(var rectX, var rectY, var rectSize, color rectColor){
    this.rectX = rectX;
    this.rectY = rectY;
    this.rectSize = rectSize;
    fill(color(rectColor));
    stroke(0);
    rect(rectX, rectY, rectSize, rectSize);
}

function redraw(){
    fill(color(rectColor));
    stroke(0);
    rect(rectX, rectY, rectSize, rectSize);
}

var overRect(var x, var y, var width, var height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function update(var x, var y) {
  if(overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } 
  else {
    rectOver = false;
  }
}

var getRectOver(){
  return this.rectOver;
}

color getRectColor(){
  return this.rectColor;
}

function changeColor(color rectColor2){
  rectColor = rectColor2;
}

//var getCurrentColor(){
//  return this.currentColor;
//}

//var getcircleColor(){
//  return this.circleColor;
//}



}

///CREATURE CLASS

class Creature {
    
  //vars
  var x = 0;
  var y = 0;
  var cc;
  
  
  //constructor
  Creature(var x, var y) {
    this.x = x;
    this.y = y;
  }
  
  Creature() {
  }
  
  function run(){
    move();
    bounce();
    gravity();
  
  }
  
  function move(){
  }
  
 function spawn(){
   cc = loadImage("cc.png");
   x = (width/2)-(cc.width/2);
   y = (height/2)-(cc.height/2);
   image(cc, x, y);
  }
  
  function bounce(){
  }
  
  function gravity(){
  }
  
  //methods 
  
}


Creature cc;
Button btn1;
Button btn2;
Button btn3;
Button btn4;
Button btn5;
Button btn6;
Button btn7;
Button btn8;
Button btn9;
Button btn10;


var marginLeft = 30;
var marginRight;
var spacing = 100;

function setup(){
  createCanvas(800,800);
  marginRight = width-130;
  smooth();
  background(255);
  cc = new Creature();
 
}

function draw(){
  fill(125,200,255);
  noStroke();
  rect(0,width/2, width, height/2);
  cc.spawn();
  
  btn1 = new Button(marginLeft, 30, 100, color(255,255,255));
  btn2 = new Button(marginLeft, 150, 100, color(255,255,255));
  btn3 = new Button(marginLeft, 270, 100, color(255,255,255));
  btn4 = new Button(marginLeft, 390, 100, color(255,255,255));
  btn5 = new Button(marginLeft, 510, 100, color(255,255,255));
  
  btn6 = new Button(marginRight, 30, 100, color(255,255,255));
  btn7 = new Button(marginRight, 150, 100, color(255,255,255));
  btn8 = new Button(marginRight, 270, 100, color(255,255,255));
  btn9 = new Button(marginRight, 390, 100, color(255,255,255));
  btn10 = new Button(marginRight, 510, 100, color(255,255,255));
  
  btn1.update(mouseX,mouseY);

  if (btn1.getRectOver()) {
    btn1.changeColor(color(255,0,0));
    btn1.redraw();
  } else {
    btn1.changeColor(color(255,255,255));
    btn1.redraw();
  }
  
}
