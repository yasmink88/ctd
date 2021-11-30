let welcome = () => "Hello World"

let double = number => number * 2

let sum = (a, b) => a + b

let hour = () => {
    let date = new Date()
    return date.getHours() + ":" + date.getMinutes();
}

console.log (welcome(), double(2), sum(4,5), hour())

function acaoCarro(callback) {
 return callback()
}

function andar() {
     return "The car is moving"
}

function parar() {
    return "The car stopped"
}

console.log(acaoCarro(parar))

//Mesa de trabalho
let firstMultiple= () => {return "Yasmin"}
let secondMultiple = () => {return "Khalaf"}
let bothMultiples = () => {return "Yasmin Khalaf"}


let FizzBuzz =  (num1, num2) => {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 == 0 && i % num2 == 0) {
            console.log( bothMultiples() )
        } else if (i % num1 == 0) {
            console.log( firstMultiple())
        } else if (i % num2 == 0) {
           console.log( secondMultiple())
        } else {
            console.log(i)
        }
    }

}

FizzBuzz(2, 7)