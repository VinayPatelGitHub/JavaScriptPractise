// JavaScript source code

var colours = [255, 255, 255];
var change = -5
var click = 0;
var randomclick = Math.round(Math.random() * 255)

function Print() {
    var string = colours + ' | ' + change + ' | ' + randomclick;
    return string;    
}

function RevertColor(obj) {
    obj.style.backgroundColor = null;
    obj.className = "box";
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

function Waves(obj) {
    //??

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
            box.id = "box" + k;
            box.setAttribute("onmouseover", "ChangeColor(this)")
            box.setAttribute("onmouseout", "RevertColor(this)")
            box.setAttribute("onclick", "Waves(this)")
            row.appendChild(box);
        };
        container.appendChild(row);
    };
    el.appendChild(container);
};

