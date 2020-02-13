
function buildRows(i) {

    // TITLE ROW
    var titleRow = document.createElement('div');
    titleRow.setAttribute('class', 'row title-row');

    var titleCol1 = document.createElement('div');
    titleCol1.setAttribute('class', 'col-sm title-column-text');
    var columnText1 = document.createTextNode(objects[i].romanizedPhrase);
    titleCol1.appendChild(columnText1);

    var titleCol2 = document.createElement('div');
    titleCol2.setAttribute('class', 'col-sm title-column-text');
    var columnText2 = document.createTextNode(objects[i].romanizedImportantCharacter);
    titleCol2.appendChild(columnText2);

    var titleCol3 = document.createElement('div');
    titleCol3.setAttribute('class', 'col-sm title-column-text');
    var columnText3 = document.createTextNode('Stroke Order');
    titleCol3.appendChild(columnText3);

    var titleCol4 = document.createElement('div');
    titleCol4.setAttribute('class', 'col-sm title-column-text');
    var columnText4 = document.createTextNode('Stroke Animation');
    titleCol4.appendChild(columnText4);

    titleRow.appendChild(titleCol1);
    titleRow.appendChild(titleCol2);
    titleRow.appendChild(titleCol3);
    titleRow.appendChild(titleCol4);
    docTable.appendChild(titleRow);
    // END TITLE ROW



    // CONTENT ROW
    var row = document.createElement('div');
    row.setAttribute('class', 'row character-row'); // classify the row for formatting and layout

    row.setAttribute('id', objects[i].id); // give the row an id
    docTable.appendChild(row); // add each row to the doc
    // END CONTENT ROW
    // CONTROL ROW
    var controlRow = document.createElement('div');
    controlRow.setAttribute('class', 'row control-row');
    docTable.appendChild(controlRow);

    var controlCol1 = document.createElement('div');
    controlCol1.setAttribute('class', 'col-sm control-column-text');
    var columnText1 = document.createTextNode('Complete Phrase');
    var column1lineBreak = document.createElement('br');
    var columnTextLine2 = document.createTextNode('(relevant words outlined in green)');



    controlCol1.appendChild(columnText1);
    controlCol1.appendChild(column1lineBreak);
    controlCol1.appendChild(columnTextLine2);

    var controlCol2 = document.createElement('div');
    controlCol2.setAttribute('class', 'col-sm control-column-text');
    var columnText2 = document.createTextNode('Press to play word:');
    controlCol2.appendChild(columnText2);
    var breakpoint = document.createElement('br');
    controlCol2.appendChild(breakpoint);
    var playWordBtn = document.createElement('button');
    playWordBtn.setAttribute('type', 'button');
    playWordBtn.setAttribute('class', 'btn btn-secondary audio-buttons');
    playWordBtn.setAttribute('audio-id', objects[i].id + '-aud');
    var wordAudioId = objects[i].id + '-aud';
    playWordBtn.onclick = function () {
        playAudio(wordAudioId)
    };
    var btnText2 = document.createElement('img');
    btnText2.setAttribute('src','./images/play.svg');
    btnText2.setAttribute('class','button-graphic');
    playWordBtn.appendChild(btnText2);

    var controlCol3 = document.createElement('div');
    controlCol3.setAttribute('class', 'col-sm control-column-text');
    var columnText3 = document.createTextNode('Click graphic above to see stroke order and hear stroke name');
    controlCol3.appendChild(columnText3);

    var controlCol4 = document.createElement('div');
    controlCol4.setAttribute('class', 'col-sm control-column-text');
    var columnText4 = document.createTextNode('Press to play animation: ');
    controlCol4.appendChild(columnText4);
    var playbtn = document.createElement('button');
    playbtn.setAttribute('type', 'button');
    playbtn.setAttribute('class', 'btn btn-secondary video-buttons');
    playbtn.setAttribute('video-id', objects[i].id + '-vid');
    var videoId = objects[i].id + '-vid';
    playbtn.onclick = function () {
        playVideo(videoId)
    };
    var btnText2 = document.createElement('img');
    btnText2.setAttribute('src','./images/play.svg');
    btnText2.setAttribute('class','button-graphic');
    playbtn.appendChild(btnText2);
    controlCol4.appendChild(playbtn);

    controlRow.appendChild(controlCol1);
    controlRow.appendChild(controlCol2);
    controlRow.appendChild(controlCol3);
    controlRow.appendChild(controlCol4);
    controlCol2.appendChild(playWordBtn);
    // END CONTROL ROW







    // FIRST COLUMN
    var col1 = document.createElement('div');
    col1.setAttribute('class', 'col-sm');
    row.appendChild(col1);
    for (let j = 0; j < objects[i].mainGraphics.length; j++) {
        var mainGraphic = document.createElement('img');
        mainGraphic.setAttribute('src', objects[i].mainGraphics[j]);
        var percent = str(100 / objects[i].mainGraphics.length) + "%";
        mainGraphic.setAttribute('width', percent);
        for (let k = 0; k < objects[i].importantCharacter.length; k++) {
            if (j == objects[i].importantCharacter[k]) {
                mainGraphic.setAttribute('class', 'important-character');
            }
        }
        col1.appendChild(mainGraphic);
    }
    // END FIRST COLUMN



    // SECOND COLUMN
    var col2 = document.createElement('div');
    col2.setAttribute('class', 'col-sm');
    row.appendChild(col2);
    var importantCharacter = document.createElement('img');
    importantCharacter.setAttribute('src', objects[i].mainGraphics[objects[i].importantCharacter[0]]);
    importantCharacter.setAttribute('width', '100%');
    col2.appendChild(importantCharacter);

    var wordAudio = document.createElement('audio')
    wordAudio.setAttribute('src', objects[i].wordAudio);
    wordAudio.setAttribute('id', objects[i].id + '-aud');
    col2.appendChild(wordAudio);





    // END SECOND COLUMN



    // THIRD COLUMN
    var col3 = document.createElement('div');
    var divName = objects[i].id + '-stroke';
    col3.setAttribute('class', 'col-sm');
    col3.setAttribute('id', divName);
    col3.setAttribute('stroke-index', 0); //this will keep track of the top-most stroke in the character
    row.appendChild(col3);
    var strokeGraphic = document.createElement('img');
    strokeGraphic.setAttribute('src', './images/guide.png');
    strokeGraphic.setAttribute('class', 'stroke');

    strokeGraphic.onclick = function () {
        swapStroke(objects[i].id);
    };
    col3.appendChild(strokeGraphic);
    // END THIRD COLUMN


    // FOURTH COLUMN
    var col4 = document.createElement('div');
    col4.setAttribute('class', 'col-sm');
    row.appendChild(col4);

    var col4Video = document.createElement('video')
    col4Video.setAttribute('src', objects[i].characterAnimated);
    col4Video.setAttribute('width', '100%');
    col4Video.setAttribute('id', objects[i].id + '-vid');
    col4.appendChild(col4Video);

    var lnbreak = document.createElement('br');
    col4.appendChild(lnbreak);

    // var backbtn = document.createElement('button');
    // backbtn.setAttribute('type', 'button');
    // backbtn.setAttribute('class', 'btn btn-secondary video-buttons');
    // var btnText1 = document.createTextNode('|<');
    // backbtn.appendChild(btnText1);
    // col4.appendChild(backbtn);


    // var fwdbtn = document.createElement('button');
    // fwdbtn.setAttribute('type', 'button');
    // fwdbtn.setAttribute('class', 'btn btn-secondary video-buttons');
    // var btnText3 = document.createTextNode('>|');
    // fwdbtn.appendChild(btnText3);
    // col4.appendChild(fwdbtn);
    // END FOURTH COLUMN

}

function playVideo(id) {
    var video = document.getElementById(id);

    video.play();

}

function playAudio(id) {
    var audio = document.getElementById(id);
    audio.play();
}

function playPhrase(phraseAudio){

}


function swapStroke(id) {

    var divID = id + '-stroke';
    var characterIndex = 0; // which character of the objects array

    for (let i = 0; i < objects.length; i++) {
        if (id == objects[i].id) {
            characterIndex = i;
        }
    }

    var index = document.getElementById(divID).getAttribute('stroke-index');

    switch (index < objects[characterIndex].strokePng.length) {
        case true:
            var div = document.getElementById(divID);
            var img = document.createElement('img');
            img.setAttribute('src', objects[characterIndex].strokePng[index]);
            img.setAttribute('class', 'stroke');
            img.onclick = function () {
                swapStroke(id)
            };

            div.appendChild(img);
            var strokeAudio = document.createElement('audio');
            strokeAudio.setAttribute('src',objects[characterIndex].strokeAudio[index]);
            strokeAudio.play();
            index++;
            break;
        case false:
            var div = document.getElementById(divID);
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            var strokeGraphic = document.createElement('img');
            strokeGraphic.setAttribute('src', './images/guide.png');
            strokeGraphic.setAttribute('class', 'stroke');
            strokeGraphic.onclick = function () {
                swapStroke(id)
            };
            div.appendChild(strokeGraphic);
            index = 0;
            break;
    }

    document.getElementById(divID).setAttribute('stroke-index', index);

}