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
    obj.style.backgroundColor = null;
    obj.className = "box";
    for (i = -1; i < 2; i += 1) {
        for (j = -1; j < 2; j += 1) {
            var newObj = changeObjID(obj.id, i, j);
            var boxObj = GetObj(newObj);
            if (boxObj !== null) {
                boxObj.style.backgroundColor = null;
                boxObj.className = "box";
            }
            
        }
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

function AddToClick() {
    if (click == 2) {
        click = 0;
    }
    else {
        click += 1;
    }
}

function GetObj(idstring) {
    
    var obj = document.getElementById(idstring);
    return obj;
}

function changeObjID(objectID, x, y) { //change object ID by x and y
    //document.getElementById("view").innerHTML = View(objectID);
    var str = objectID + " ";
    var n1 = str.search("b");
    var rowNum = str.substring(3, n1);
    //document.getElementById("view").innerHTML = View(boxNum);
    var n2 = str.search("x") + 1;
    var n3 = str.search(" ");
    var boxNum = str.substring(n2, n3);
    var boxNum1 = parseInt(boxNum) + parseInt(x);
    //document.getElementById("view").innerHTML = View(boxNum1);
    var rowNum1 = parseInt(rowNum) + parseInt(y);
    var result = 'row' + rowNum1 + 'box' + boxNum1;
    //document.getElementById("view").innerHTML = View(result);
    return result
}

function Waves(objID) {
    //document.getElementById("view").innerHTML = View(objID);
    for (i = -1; i < 2; i += 1) {
        for (j = -1; j < 2; j += 1) {
            var newObj = changeObjID(objID, i, j);
            var boxObj = GetObj(newObj);
            ChangeColor(boxObj);
        }        
    }

    for (let i = 0; i < 10; i++) {
        task(i);
    } 

    for (i = -2; i < 3; i += 1) {
        for (j = -2; j < 3; j += 1) {
            var newObj = changeObjID(objID, i, j);
            var boxObj = GetObj(newObj);
            ChangeColor(boxObj);
        }
    } 

}

function grid(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";

    for (i = 0; i < 20; i += 1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;

        for (k = 0; k < 20; k += 1) {
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

