var objects = [];
var object;
var bg;
var strokes = [];
var strokeNumber = 0;
var vid;

function preload(){
    directory = loadJSON('json/directory15.json', ()=>{
        object = loadJSON(directory.lesson[3]);
    });
}

function setup(){
     
    strokeStep();

    characterTitle();

    loadVideo();
    vid.play();
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

function loadStroke(placeHolder){
    image(strokes[placeHolder], 0,0);
}

function loadCharacter(i){
    object = loadJSON(directory.lesson[i]);
}

function loadContextual(){
    var contextCanvas = createCanvas(900,300)
}

function strokeStep(){
    var strokeCanvas = createCanvas(300, 300);
    strokeCanvas.parent('canvas');
    bg = loadImage('images/guide.png');
    for (let index = 0; index < object.strokePng.length; index++) {
        img = loadImage(object.strokePng[index]);
        strokes.push(img);
    }
}

function characterTitle(){
    var eng = createElement('h1',object.english);
    eng.parent('english');
}

function loadVideo(){
    vid = document.getElementById('video-object');
    vid.src = object.characterAnimated;
}


// UTILITY FUNCTIONS

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
