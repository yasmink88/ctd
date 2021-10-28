function add(num1,num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function quadradoDoNumero(num) {
   return multiply(num, num)
}

function mediaDeTresNumeros(num1, num2, num3) {
    return divide((add(num1, num2) + num3),3)
}

function calculaPorcentagem(num, percentage) {
    return multiply(divide(percentage,100), num)
}

function geradorDePorcentagem(num1, num2) {
    return multiply(divide(num1,num2), 100)
}

console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log("Addition: ", add(5,6))
console.log("Subtraction: ", sub(10,4))
console.log("Multiplication: ", multiply(12,4))
console.log("Division: ", divide(10,5))
console.log("Division: ", divide(0,10))
console.log("Power: ", quadradoDoNumero(3))
console.log("Average: ", mediaDeTresNumeros(3, 5, 8))
console.log("Result of percentage: ", calculaPorcentagem(300, 15))
console.log("Percentage: ", geradorDePorcentagem(9, 60))