let body = document.body;
let button = document.getElementById("btn");

button.addEventListener("click", function () {
    let date = new Date();
    let line = document.createElement("p");
    line.innerHTML = date.toLocaleString("pt-PT");
    body.appendChild(line);
});
