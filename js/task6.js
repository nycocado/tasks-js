let redButton = document.getElementById("red");
let yellowButton = document.getElementById("yellow");
let greenButton = document.getElementById("green");
let circle = document.getElementById("circle");

redButton.addEventListener("click", function () {
    circle.style.backgroundColor = "red";
});

yellowButton.addEventListener("click", function () {
    circle.style.backgroundColor = "yellow";
});

greenButton.addEventListener("click", function () {
    circle.style.backgroundColor = "green";
});
