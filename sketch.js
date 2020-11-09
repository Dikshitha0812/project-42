function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("white");  
  drawSprites();
  background("white"); 

translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(7);
  stroke("#b19cd9");
  noFill();
 //lines
  var end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("#ffd1dc");
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("#aec6cf");
  var end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  //arms
  push();
  rotate(end);
  stroke("#b19cd9");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("#ffd1dc");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("#aec6cf");
  line(0,0,50,0);
  pop();
  
  stroke("white");
  point (0,0);

  }
