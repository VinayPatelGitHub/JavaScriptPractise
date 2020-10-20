// JavaScript source code
function SayHello() {
    window.alert("Hello There");
    document.getElementById("greeting").innerHTML = "Good morning";
    console.log("Hi Everyone")
}
function ChangeColor(obj, newColor) {
    obj.style.color = newColor;
}

function AddALine(obj) {
    var para = document.createElement("p");
    var textNode = document.createTextNode("Hey Jude");
    para.appendChild(textNode);
    obj.appendChild(para)
}

function DeleteLastLine(obj) {
    var elements = obj.getElementsByTagName('p');
    obj.removeChild(elements[elements.length - 1]);
}

