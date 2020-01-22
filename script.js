var lessonDirectory15;
var lessonDirectory16;
var lessonDirectory17;

var selectedObject;
var objects = [];
// var index;
// var bg;
// var strokes = [];
// var strokeNumber = 0;
// var vid;

function preload(){
    //lessonDirectory15 = loadJSON('json/directory15.json');
    lessonDirectory15 = loadJSON('json/directory15.json', ()=>{
        lessonDirectory16 = loadJSON('json/directory16.json', ()=>{
            lessonDirectory17 = loadJSON('json/directory17.json');
        });
    })
}

function setup() {
    // console.log('uh huh')
    // for (let i = 0; i < lessonDirectory15.length; i++) {
    //     var obj = loadJSON(lessonDirectory15[i]);
    //     objects.push(obj);
    //     console.log('yo');
    // }
    //displayCharacters();
}


function displayCharacters(){

    for (let i = 0; i < lessonDirectory15.character.length; i++) {
        var obj;
        obj = loadJSON(lessonDirectory15.character[i],()=>{
            objects.push(obj);
        });
    }
}

function createPs(){
    for (let i = 0; i < objects.length; i++) {
        createP(objects[i].english);
    }
}

// function getSelection(){
//     index = document.getElementById('chNumber').value;
// }

// function loadCharacter(){
//     getSelection();
//     console.log(index);
//     selectedObject = loadJSON(lessonDirectory16.character[index],()=>{
//         characterTitle();
//         strokeStep();
//     });
//     displayCharacters();
// }



// function mousePressed(){
//     strokeStep();
//         characterTitle();
//         loadVideo();
//         //vid.play();
    
//     clear();
//     image(bg, 0, 0);
//     for (let index = 0; index < strokeNumber; index++) {
//         loadStroke(index);
//     }
//     strokeNumber++;
//     if (strokeNumber > strokes.length) {
//         strokeNumber = 0;
//     }
// }

// function loadStroke(placeHolder){
//     image(strokes[placeHolder], 0,0);
// }

// function strokeStep(){
//     var strokeCanvas = createCanvas(300, 300);
//     strokeCanvas.parent('canvas');
//     bg = loadImage('images/guide.png');
//     for (let index = 0; index < selectedObject.strokePng.length; index++) {
//         img = loadImage(selectedObject.strokePng[index]);
//         strokes.push(img);
//     }
// }

// function characterTitle(){
//     var eng = createElement('h1',selectedObject.romanized);
//     eng.parent('romanized');
// }

// function loadVideo(){
//     vid = document.getElementById('video-object');
//     vid.src = object.characterAnimated;
// }


// // UTILITY FUNCTIONS

// function simplifyTimecode(index){
//     var ts = 0;
//     try{
//         timecode = object.timecodes[index];
//         ts = timecode.split(":");
//         console.log(int(ts[2]));
//     }
//     catch(err){
//         console.log("doesn't exist, idiot");
//     }
//     return ts;
// }
