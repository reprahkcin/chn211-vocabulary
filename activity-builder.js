
function buildRows(i) {

    // TITLE ROW
    var titleRow = document.createElement('div');
    titleRow.setAttribute('class', 'row title-row');

    var titleCol1 = document.createElement('div');
    titleCol1.setAttribute('class', 'col-sm title-column-text');
    var columnText1 = document.createTextNode(objects[i].english);
    titleCol1.appendChild(columnText1);

    var titleCol2 = document.createElement('div');
    titleCol2.setAttribute('class', 'col-sm title-column-text');
    var columnText2 = document.createTextNode('Complete Character');
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


    var row = document.createElement('div');
    row.setAttribute('class', 'row character-row');

    row.setAttribute('id', objects[i].id);
    docTable.appendChild(row);

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

    var col2 = document.createElement('div');
    col2.setAttribute('class', 'col-sm');
    row.appendChild(col2);
    var importantCharacter = document.createElement('img');
    importantCharacter.setAttribute('src', objects[i].mainGraphics[objects[i].importantCharacter[0]]);
    importantCharacter.setAttribute('width', '100%');
    col2.appendChild(importantCharacter);


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
        swapStroke(objects[i].id)
    };
    col3.appendChild(strokeGraphic);

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

    var backbtn = document.createElement('button');
    backbtn.setAttribute('type', 'button');
    backbtn.setAttribute('class', 'btn btn-secondary video-buttons');
    var btnText1 = document.createTextNode('|<');
    backbtn.appendChild(btnText1);
    col4.appendChild(backbtn);


    var playbtn = document.createElement('button');
    playbtn.setAttribute('type', 'button');
    playbtn.setAttribute('class', 'btn btn-secondary video-buttons');
    playbtn.setAttribute('video-id', objects[i].id + '-vid');
    var videoId = objects[i].id + '-vid';
    playbtn.onclick = function () {
        playVideo(videoId)
    };
    var btnText2 = document.createTextNode('>');
    playbtn.appendChild(btnText2);
    col4.appendChild(playbtn);


    var fwdbtn = document.createElement('button');
    fwdbtn.setAttribute('type', 'button');
    fwdbtn.setAttribute('class', 'btn btn-secondary video-buttons');
    var btnText3 = document.createTextNode('>|');
    fwdbtn.appendChild(btnText3);
    col4.appendChild(fwdbtn);
}

function playVideo(id) {
    var video = document.getElementById(id);

    video.play();

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