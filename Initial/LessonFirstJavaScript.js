// JavaScript source code
var colours = [255, 255, 255];
var change = -10
var click = 0;
var randomclick = Math.round(Math.random() * 255)

function ChangeColor(obj) {
    obj.className = "itemClassActive";
}

function RevertColor(obj) {
    obj.className = "itemClassDefault";
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'; 
}

function ChangeColor2(obj) {
    obj.className = "activeBox";
    var num1 = Math.round(Math.random() * 255);
    var num2 = Math.round(Math.random() * 255);
    var num3 = Math.round(Math.random() * 255);
    var color = 'rgba(' + num1 + ',' + num2 + ',' + num3 + ',' + 1 + ')';
    obj.style.backgroundColor = color;

}

function RevertColor2(obj) {
    obj.style.backgroundColor = null;
    obj.className = "box";
}

function RevertColor3(obj) {
    obj.style.backgroundColor = null;
    obj.className = "box1";
}

function ChangeColor3(obj) {
    obj.className = "activeBox";
    if (colours[click] > 240) {
        change = -10;
    }
    else if (colours[click] < 15) {
        change = 10;
    }
    colours[click] += change;
    var num1 = colours[0];
    var num2 = colours[1];
    var num3 = colours[2];
    var color = 'rgba(' + num1 + ',' + num2 + ',' + num3 + ',' + 1 + ')'
    obj.style.backgroundColor = color;
}

function ChangeColor4(obj) {
    obj.className = "activeBox1";
    if (colours[click] > 240) {
        change = -10;
    }
    else if (colours[click] < 15) {
        change = 10;
    }
    colours[click] += change;
    var num1 = colours[0];
    var num2 = colours[1];
    var num3 = colours[2];
    var color = 'rgba(' + num1 + ',' + num2 + ',' + num3 + ',' + 1 + ')'
    obj.style.backgroundColor = color;
}

function ChangeColor5(obj) {
    obj.className = "activeBox";
    if (colours[click] > 240) {
        change = -10;
    }
    else if (colours[click] < 15) {
        change = 10;
    }

    colours[click] += change;

    if (randomclick == -10 && colours[click] < randomclick) {
        AddToClick();
        randomclick = Math.round(Math.random() * 255)
    }
    else if (randomclick == 10 && colours[click] > randomclick) {
        AddToClick();
        randomclick = Math.round(Math.random() * 255)
    }
    
    var num1 = colours[0];
    var num2 = colours[1];
    var num3 = colours[2];
    var color = 'rgba(' + num1 + ',' + num2 + ',' + num3 + ',' + 1 + ')'
    obj.style.backgroundColor = color;
}

function AddToClick() {
    if (click == 3) {
        click = 0;
    }
    else {
        click += 1;
    }
}


function grid(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";

    for (i = 0; i < 15; i += 1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;

        for (k = 0; k < 16; k += 1) {
            var box = document.createElement("div");
            box.className = "box";
            box.id = "box" + k;
            box.setAttribute("onmouseover", "ChangeColor2(this)")
            box.setAttribute("onmouseout", "RevertColor2(this)") 
            row.appendChild(box);
        };
        container.appendChild(row);
    };
    el.appendChild(container);
};

function grid2(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";

    for (i = 0; i < 15; i += 1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;

        for (k = 0; k < 16; k += 1) {
            var box = document.createElement("div");
            box.className = "box";
            box.id = "box" + k;
            box.setAttribute("onmouseover", "ChangeColor3(this)")
            box.setAttribute("onmouseout", "RevertColor2(this)")
            box.setAttribute("onclick", "AddToClick()")
            row.appendChild(box);
        };
        container.appendChild(row);
    };
    el.appendChild(container);
};

function grid3(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";

    for (i = 0; i < 60; i += 1) {
        var row = document.createElement("div");
        row.className = "row1";
        row.id = "row1" + i;

        for (k = 0; k < 60; k += 1) {
            var box = document.createElement("div");
            box.className = "box1";
            box.id = "box1" + k;
            box.setAttribute("onmouseover", "ChangeColor4(this)")
            box.setAttribute("onmouseout", "RevertColor3(this)")
            box.setAttribute("onclick", "AddToClick()")
            row.appendChild(box);
        };
        container.appendChild(row);
    };
    el.appendChild(container);
};
