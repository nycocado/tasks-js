let body = document.body;

function printNumber(num) {
    let number = document.createElement("p");
    number.innerHTML = num;
    body.appendChild(number);
}

for (let i = 1; i <= 100; i++) {
    setTimeout(() => printNumber(i), 500 * i);
}
