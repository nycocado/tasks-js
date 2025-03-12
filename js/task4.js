let button = document.getElementById("btn");

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener("click", function () {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let string = "";

    if (min > max) {
        alert("Mínimo e máximo em ordem crescente");
        return;
    }

    for (let i = 0; i < 10; i++) {
        string += randomBetween(min, max) + (i < 10 - 1 ? ", " : "");
    }

    alert(string);
});
