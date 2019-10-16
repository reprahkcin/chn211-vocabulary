var objects = [];
var object;
var bg;
var strokes = [];
var strokeNumber = 0;

function preload(){
   object = loadJSON('json/lesson16/buCuo.json');
}

function setup(){
    createCanvas(300, 300);
    bg = loadImage('images/guide.png')
    for (let index = 0; index < object.strokePng.length; index++) {
        img = loadImage(object.strokePng[index]);
        strokes.push(img);
    }
    createP(object.english);
    image(bg, 0, 0);
}

function mousePressed(){
    clear();
    image(bg, 0, 0);
    for (let index = 0; index < strokeNumber; index++) {
        loadStroke(index);
    }
    strokeNumber++;
    if (strokeNumber > strokes.length) {
        strokeNumber = 0;
    }
}

function draw(){
    
}

function loadStroke(placeHolder){
    image(strokes[placeHolder], 0,0);
}

