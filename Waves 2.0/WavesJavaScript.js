// JavaScript source code

var colours = [255, 255, 255];
var change = -5
var click = 0;
var randomclick = Math.round(Math.random() * 255)

function Print() {
    var string = colours + ' | ' + change + ' | ' + randomclick;
    return string;    
}

function View(string) {
    var string = string;
    return string;    
}

function RevertColor(obj) {
    if (obj !== null) {
        obj.style.backgroundColor = null;
        obj.className = "box";
    }    
}

function ChangeColor(obj) {
    obj.className = "activeBox";
    if (colours[click] > 245) {
        change = -5;
    }
    else if (colours[click] < 40) {
        change = 5;
    }

    colours[click] += change;

    if (change == -5 && colours[click] < randomclick) {
        AddToClick();
        randomclick = Math.round(Math.random() * 190 + 50)
    }
    else if (change == 5 && colours[click] > randomclick) {
        AddToClick();
        randomclick = Math.round(Math.random() * 190 + 50)
    }    
    var num1 = colours[0];
    var num2 = colours[1];
    var num3 = colours[2];
    var color = 'rgba(' + num1 + ',' + num2 + ',' + num3 + ',' + 1 + ')'
    obj.style.backgroundColor = color;
    document.getElementById("text").innerHTML = Print();
}

function ChangeWaveColor(obj) {
    var num1 = colours[0];
    var num2 = colours[1];
    var num3 = colours[2];
    var color = 'rgba(' + num1 + ',' + num2 + ',' + num3 + ',' + 1 + ')'
    obj.style.backgroundColor = color;
    document.getElementById("text").innerHTML = Print();
}

function AddToClick() {
    if (click == 2) {
        click = 0;
    }
    else {
        click ++;
    }
}

function GetObj(idstring) {
    
    var obj = document.getElementById(idstring);
    return obj;
}

function changeObjID(objectID, x, y) { //change object ID by x and y
    var str = objectID + " ";
    var n1 = str.search("b");
    var rowNum = str.substring(3, n1);
    var n2 = str.search("x") + 1;
    var n3 = str.search(" ");
    var boxNum = str.substring(n2, n3);
    var boxNum1 = parseInt(boxNum) + parseInt(x);
    var rowNum1 = parseInt(rowNum) + parseInt(y);
    var result = 'row' + rowNum1 + 'box' + boxNum1;
    return result
}

function WaveChangeColour(currentSize, objID){
    for (i = -currentSize; i < currentSize + 1; i++) {
        for (j = -currentSize; j < currentSize + 1; j++) {
            var newObj = changeObjID(objID, i, j);
            var boxObj = GetObj(newObj);
            if (boxObj !== null) {
                ChangeWaveColor(boxObj);
            }
        }
    }
}

function WaveRemovePrevious(previousSize, objID) {
    for (i = -previousSize; i < previousSize + 1; i++) {
        for (j = -previousSize; j < previousSize + 1; j++) {
            var newObj = changeObjID(objID, i, j);
            var boxObj = GetObj(newObj);
            RevertColor(boxObj);
        }
    }
}

function Waves(objID) { 
    var wait = 150;
    var count = 15;
    var delay = 2
    for (let w = 1; w < count; w++) {
        setTimeout(function Grow() {
            if (w < count - delay) {
                WaveChangeColour(w, objID);
            }
            v = w - delay;
            WaveRemovePrevious(v, objID);
        }, wait * w);
    }
}

function grid(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";
    var numOfPixels = 40

    for (i = 0; i < numOfPixels; i += 1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;

        for (k = 0; k < numOfPixels; k += 1) {
            var box = document.createElement("div");
            box.className = "box";
            box.id = "row" + i + "box" + k;
            box.setAttribute("onmouseover", "ChangeColor(this)")
            box.setAttribute("onmouseout", "RevertColor(this)")
            box.setAttribute("onmousedown", "Waves(this.id)")
            box.setAttribute("onmouseup", "RevertColor(this)")
            
            row.appendChild(box);
        };
        container.appendChild(row);
    };
    el.appendChild(container);
};

