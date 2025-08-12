function calc(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Iltimos, son kiriting!";
        return;
    }

    if (operation === "add") result = num1 + num2;
    if (operation === "sub") result = num1 - num2;
    if (operation === "mul") result = num1 * num2;
    if (operation === "div") {
        if (num2 === 0) {
            document.getElementById("result").innerHTML = "0 ga bo‘lish mumkin emas!";
            return;
        }
        result = num1 / num2;
    }

    document.getElementById("result").innerHTML = `Result: ${result}`;
}
