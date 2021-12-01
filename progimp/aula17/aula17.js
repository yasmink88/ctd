let evenNum = [2, 4, 6, 8]

let oddNum = evenNum.map((item) => {
    return item - 1 

});

console.log(oddNum)

let names = ["Maria", "Maria", "Douglas"]

let onlyMaria = names.filter((item) => {
 return item == "Maria";
});

console.log(onlyMaria)

let numbers = [5, 4, 7, 8, 9]

let sum = numbers.reduce((acc, item) => {
    return acc + "-" + item
});

console.log(sum)

let animals = ['Dog', 'Cat', "Bird", "Bat", "Aligator", "Giraffe", "Elephant"]

animals.forEach((item) => {
    console.log("This is a " + item)
});

//Mesa de trabalho
function division(array) {
    let sum = array.reduce((acc, value) => {
        return acc + value
    })

    let newArray = array.map((item)=> {
        return item / sum

    })

    return newArray
}

console.log(division(numbers))

function words(array, num) {
    let filteredWords = array.filter((item) => {
        if (item.length > num) {
            return item
        }
    })

    return filteredWords
}

console.log(words(animals, 7))

let alunos = [
    {
        nome: "Yasmin",
        nota: 8
    },
    {
        nome: "Douglas",
        nota: 5
    }
]


