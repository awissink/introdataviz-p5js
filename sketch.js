/* ASSIGNMENT 0: CLOCKS

Name: Amelia Wissink
Uni: afw2122
Date: December 14, 2023

My design was inspired by the Apple Watch rings!
*/

let prevMinute;
// setup() is called once at page-load
function setup() {
    createCanvas(400, 400); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(220);
    if (min !== prevMinute) {
        console.log('Current minute: ' + min);
        prevMinute = min;
    }
    
      drawClockRings(hr, min, sec);
}

function drawClockRings(hr, min, sec) {
  // Map the current time to the corresponding angle
  let outer = map(hr % 12, 0, 12, 0, TWO_PI) - HALF_PI;
  let middle = map(min, 0, 60, 0, TWO_PI) - HALF_PI;
  let inner = map(sec, 0, 60, 0, TWO_PI) - HALF_PI;

  // Draw each ring
  noFill();

  // Hours (outer)
  stroke(249, 31, 107); // Magenta
  strokeWeight(20);
  arc(width/2, height/2, 300, 300, -HALF_PI, outer);

  // Minutes (middle)
  stroke(190, 250, 4); // Green
  strokeWeight(20);
  arc(width/2, height/2, 260, 260, -HALF_PI, middle);
 
  // Seconds (inner)
  stroke(6, 247, 219); // Cyan
  strokeWeight(20);
  arc(width/2, height/2, 220, 220, -HALF_PI, inner);
}