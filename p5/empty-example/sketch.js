
var cc; // creature
var ccImg; //creature Image

var btn1;
var btn2;
var btn3;
var btn4;
var btn5;
var btn6;
var btn7;
var btn8;
var btn9;
var btn10;


var marginLeft = 30;
var marginRight;
var spacing = 100;

function setup(){
  createCanvas(800,800);
  marginRight = width-130;
  smooth();
  background(255);
  ccImg = loadImage("cc.png");
  cc = new Creature(0,0, ccImg);
  btn1 = new Button(30, 150, 100, color(255,255,255));
}

function draw(){
  background(255);
  fill(125,200,255);
  noStroke();
  rect(0,width/2, width, height/2);
  cc.spawn();
  
  btn1 = new Button(30, 150, 100, color(0,255,255));
  btn.getRectOver();
  // btn3 = new Button(marginLeft, 270, 100, color(255,255,255));
  // btn4 = new Button(marginLeft, 390, 100, color(255,255,255));
  // btn5 = new Button(marginLeft, 510, 100, color(255,255,255));
  
  // btn6 = new Button(marginRight, 30, 100, color(255,255,255));
  // btn7 = new Button(marginRight, 150, 100, color(255,255,255));
  // btn8 = new Button(marginRight, 270, 100, color(255,255,255));
  // btn9 = new Button(marginRight, 390, 100, color(255,255,255));
  // btn10 = new Button(marginRight, 510, 100, color(255,255,255));
  
  // btn1.update(mouseX,mouseY);

  // if (btn1.getRectOver()) {
  //   btn1.changeColor(color(255,0,0));
  //   btn1.redraw();
  // } 
  // else {
  //   btn1.changeColor(color(255,255,255));
  //   btn1.redraw();
  // }
  
}



////BUTTON CLASS///////////////////////////////////////////// 

class Button{

Button(rectX, rectY, rectSize, rectColor){
    this.rectX = rectX;
    this.rectY = rectY;
    this.rectSize = rectSize;

    this.rectX = rectX;
	this.rectColor = color(0,0,0);
	this.rectOver = false;
	this.circleOver = false;

    fill(color(this.rectColor));
    stroke(0);
    rect(this.rectX, this.rectY, this.rectSize, this.rectSize);
}

redraw(){
    fill(color(this.rectColor));
    stroke(0);
    rect(this.rectX, this.rectY, this.rectSize, this.rectSize);
}

overRect(x, y, width, height)  {
  if (this.mouseX >= x && this.mouseX <= this.x+this.width && 
      this.mouseY >= this.y && this.mouseY <= this.y+this.height) {
    return true;
  } 
  else {
    return false;
  }
}

 update(x, y) {
  if(this.overRect(this.rectX, this.rectY, this.rectSize, this.rectSize) ) {
    this.rectOver = true;
    this.circleOver = false;
  } 
  else {
    this.rectOver = false;
  }
}

getRectOver(){
  return this.rectOver;
}

getRectColor(){
  return this.rectColor;
}

changeColor(rectColor2){
  this.rectColor = this.rectColor2;
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

  //constructor

  Creature(x, y, ccImg) {
    this.x = x;
    this.y = y;
    this.ccImg = ccImg;
  }
  
  Creature() {
  }
  
  spawn(){
   // this.x = (this.width/2)-(this.cc.width/2);
   // this.y = (this.height/2)-(this.cc.height/2);
   // this.x = ;
   // this.y = ;
   image(ccImg, 340, 340);
  }
  //methods 
  
}
