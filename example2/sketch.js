let r = 1;
let img;
let box1;

let size = 20;

function setup(){

  createCanvas(windowWidth, windowHeight,WEBGL);

img = loadImage("https://images2.minutemediacdn.com/image/upload/c_crop,h_2367,w_4209,x_0,y_0/f_auto,q_auto,w_1100/v1554989622/shape/mentalfloss/527175-istock-514622028.jpg");
box1 = new Cube(size);

}

function draw(){

  background(20,100,40);

box1.display();


}

class Cube{
constructor(size){
this.size = size;

}

display(){

  translate(0, 0,0);
   push();

   rotateY(r);
   texture(img);
   box(40);
   pop();
   r += 0.05;



}

}
