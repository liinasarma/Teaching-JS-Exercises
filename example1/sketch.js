// let canvas;
//
// let ds;
//
// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight);
//   canvas.position(0,0);
//   canvas.style('z-index', '-1');
//
// frameRate(2)
// }
//
// function draw() {
//   background(150);
//   // for (let i = 0; i < width; i++) {
//   //    let r = random(255);
//   //    stroke(r);
//   //    line(i, 0, i, height);
//   //  }
// }
//
// let mic;
//
// function setup() {
//   createCanvas(710, 200);
//
//   // Create an Audio input
//   mic = new p5.AudioIn();
// mic.start();
//
//   // start the Audio Input.
//   // By default, it does not .connect() (to the computer speakers)
//
// }
//
// function draw() {
//   background(200);
//   if(mouseIsPressed){
//
//   }
//   // Get the overall volume (between 0 and 1.0)
//   let vol = mic.getLevel();
//   fill(127);
//   stroke(0);
//
//   // Draw an ellipse with height based on volume
//   let h = map(vol, 0, 1, height, 0);
//   ellipse(width / 2, h - 25, 50, 50);
// }


var mic
var vol = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create an Audio input
  mic = new p5.AudioIn();
     // start the Audio Input.


  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
   var vol = mic.getLevel();

  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  var h = map(vol, 0, 0.5, height, 0);
  ellipse(h, h, 50, 50);
}

function touchStarted() {
  getAudioContext().resume()
}
