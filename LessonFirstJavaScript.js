// JavaScript source code
grid(document.body)

function ChangeColor(obj) {
    obj.className = "itemClassActive";
}

function RevertColor(obj) {
    obj.className = "itemClassDefault";
}

function ChangeColor2(obj) {
    obj.className = "activeBox";
    //obj.style.backgroundColor = "rgba(255, 255, 255, 1)";
}

function RevertColor2(obj) {
    obj.className = "box";
}

function ChangetoRanColor2(obj) {
    //var colour1 = ["red", "yellow", "green", "blue"];
    //var num = Math.random(3);
    //var changeColour = colour1[num];



    //var num1 = Math.random(255);
    //var num2 = Math.random(255);
    //var num3 = Math.random(255);

    obj.style.backgroundColor = "red";

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
            box.setAttribute("onclick", "ChangetoRanColor2(this)")
            row.appendChild(box);
        };
        container.appendChild(row);
    };
    el.appendChild(container);
};


