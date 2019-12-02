var lessonDirectory16;
var objects = [];
var docTable;

function preload(){
    lessonDirectory16 = loadJSON('json/directory16.json');
}

function setup(){
    docTable = document.getElementById('main');
    loadObjects(0);
}

function loadObjects( i ){
    var obj = loadJSON(lessonDirectory16.character[i],()=>{
        objects.push(obj);
        if( i < lessonDirectory16.character.length -1) {
            i += 1;
            loadObjects(i);
        } else {
            ready();
            console.log('DONE');
        }
    });
}

function ready() {
    for (let i = 0; i < objects.length; i++) {
        buildRows( i );
    }
}