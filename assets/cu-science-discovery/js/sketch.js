var fourpoint = [];
var plus = []
var degree = [];
var drop = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 10; i++) {
    fourpoint[i] = new fallingFourpoint();
    plus[i] = new fallingPlus();
    degree[i] = new fallingDeg();
  }
}

function draw() {
  background(255);
  if(!drop) {
    for(var i = 0; i < fourpoint.length; i++) {
      fourpoint[i].show();
      fourpoint[i].move();
    }
    for(var j = 0; j < plus.length; j++) {
      plus[j].show();
      plus[j].move();
    }
    for(var k = 0; k < degree.length; k++) {
      degree[k].show();
      degree[k].move();
    }
  }
  for (var y = fourpoint.length - 1; y >= 0; y--) {
    if(fourpoint[y].d) {
      fourpoint.splice(y, 1);
    }
    if (fourpoint.length < 10) {
      for (var z = fourpoint.length; z < random(5, 10); z++) {
        fourpoint[z] = new fallingFourpoint();
      }
    }
  }
  for (var a = plus.length - 1; a >= 0; a--) {
    if(plus[a].d) {
      plus.splice(a, 1);
    }
    if (plus.length < 10) {
      for (var b = plus.length; b < random(10, 15); b++) {
        plus[b] = new fallingPlus();
      }
    }
  }
  for (var c = degree.length - 1; c >= 0; c--) {
    if(degree[c].d) {
      degree.splice(c, 1);
    }
    if (degree.length < 10) {
      for (var d = degree.length; d < random(10, 15); d++) {
        degree[d] = new fallingDeg();
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}