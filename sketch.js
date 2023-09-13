// PERLIN NOISE TEST
let particles = [];
const num = 15000;

const noiseScale = 0.01/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  s1 = createSlider(1, 1000, 5, 1).position(30, 30)
  p1 = createP('x').position(30, 35)
  s2 = createSlider(1, 1000, 5, 1).position(30, 75)
  p2 = createP('y').position(30, 80)
  s3 = createSlider(1, 255, 5, 1).position(30, 120)
  p3 = createP('a secret third thing').position(30, 125)
  
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  
  stroke(255,255,255);
  clear();
}

function draw() {
  background(0, 10);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += tan(a)^s1.value();
    p.y += sin(a)^s2.value();
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mousePressed() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

function drawWords(x){
    fill(255);
    text('is this a garden?', width/2, height/2)
}




