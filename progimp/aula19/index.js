const pessoas = require('./pessoas')

function tallestPerson(array) {
    let altura = []
    for (let i = 0; i < array.length; i++) {
        
        altura.push(array[i].altura)
    }
    return `Tallest person is ${Math.max(...altura)} and shortest person is ${Math.min(...altura)}`
    } 

function AvgHeightWomen(array) {
    let alturaWomen = []
    let avgHeight = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i].sexo == "F") {
            alturaWomen.push(Number(array[i].altura))
        }
    }
let sum = alturaWomen.reduce((acc, num) => acc + num, 0)

return `Average women's height: ${avgHeight = sum / alturaWomen.length}`
}

function qtdHomens(array) {
    
    return `There are ${array.filter((i) => i.sexo == "M").length} men.`
}



console.log(tallestPerson(pessoas))
console.log(AvgHeightWomen(pessoas))
console.log(qtdHomens(pessoas))