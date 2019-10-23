
let n = 0.0;
let increment = 0.1;
let x = [];
let y = [];


function setup(){

createCanvas(windowWidth, windowHeight);
background(243,253,232);

for(let i = 0; i<13; i++){

x[i] = random(0, windowWidth);
y[i] = random(0, windowHeight);

}




}

function draw(){

frameRate(15);
n+=increment;

  let pos = noise(n)*200;


for(let i = 0; i<13; i++){


  stroke(random(0,255), 150,200, 30);
  line(x[i]+pos, y[i], x[i]+pos, y[i]+50);

}

increment+=0.5;
}
