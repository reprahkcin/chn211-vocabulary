var lessonDirectory16;
var objects = [];

function preload(){
    lessonDirectory16 = loadJSON('json/directory16.json');
}

function setup(){
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

}