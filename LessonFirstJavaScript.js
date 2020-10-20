// JavaScript source code

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


function ChangeColor3(obj) {
    obj.className = "activeBox";
    var color = random_rgba();
    obj.style.backgroundColor = color;

}

function ChangetoRanColor(obj) {



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
            box.setAttribute("onmouseover", "ChangeColor2(this)")
            box.setAttribute("onmouseout", "RevertColor3(this)")
            //box.setAttribute("onclick", "ChangetoRanColor(this)")
            row.appendChild(box);
        };
        container.appendChild(row);
    };
    el.appendChild(container);
};


