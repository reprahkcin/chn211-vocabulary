var objects = [];
var object;
var bg;
var strokes = [];
var strokeNumber = 0;

function preload(){
    directory = loadJSON('json/directory.json', ()=>{
        object = loadJSON(directory.lesson.seventeen[6]);
    });
}

function setup(){

    var canvas = createCanvas(300, 300);
    canvas.parent('canvas')
    bg = loadImage('images/guide.png')
    for (let index = 0; index < object.strokePng.length; index++) {
        img = loadImage(object.strokePng[index]);
        strokes.push(img);
    }
    var eng = createElement('h1',object.english);
    eng.parent('english');
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

    simplifyTimecode(13);
}

function draw(){
    
}

function loadStroke(placeHolder){
    image(strokes[placeHolder], 0,0);
}

function simplifyTimecode(index){
    var ts = 0;
    try{
        timecode = object.timecodes[index];
        ts = timecode.split(":");
        console.log(int(ts[2]));
    }
    catch(err){
        console.log("doesn't exist, idiot");
    }

    return ts;
}

