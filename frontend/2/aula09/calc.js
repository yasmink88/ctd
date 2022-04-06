let n1 = document.getElementById("number1");
let n2 = document.getElementById("number2");
const displayResult = document.querySelector(".result");
const operatorBtns = document.getElementsByClassName("operator");



for (let btn of operatorBtns) {
  btn.addEventListener("click", () => {
    switch (btn.dataset.action) {
      case "add":
        result = sum(parseInt(n1.value), parseInt(n2.value));


        break;
      case "subtract":
        result = subtract(parseInt(n1.value), parseInt(n2.value));

        break;
      case "multiply":
        result = multiply(parseInt(n1.value), parseInt(n2.value));

        break;
      case "divide":
        result = divide(parseInt(n1.value), parseInt(n2.value));

        break;

      default:
        result = "Operation not recongized";
        break;
    }
    displayResult.textContent = result
  });
}


