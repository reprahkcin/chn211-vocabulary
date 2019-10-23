var directory15;
var directory16;
var directory17;
var object;

function preload(){
    directory15 = loadJSON('json/directory15.json');
    directory16 = loadJSON('json/directory16.json');
    directory17 = loadJSON('json/directory17.json');
}

function loadObject15(i){
    object = loadJSON(directory15.lesson[i]);
}

function loadObject16(i){
    object = loadJSON(directory16.lesson[i]);
}

function loadObject17(i){
    object = loadJSON(directory17.lesson[i]);
}