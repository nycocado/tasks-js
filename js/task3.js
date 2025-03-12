let body = document.body;
let button = document.getElementById("btn");

function printNumber(num) {
    let number = document.createElement("p");
    number.innerHTML = num;
    body.appendChild(number);
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener("click", function () {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);

    if (min > max) {
        alert("Mínimo e máximo em ordem crescente");
        return;
    }

    for (let i = 0; i < 10; i++) {
        printNumber(randomBetween(min, max));
    }
});
