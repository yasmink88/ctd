const alicia = [23, 69, 32];
const bob = [12, 65, 43];

function findWinner(a, b) {
  let aliciaPoints = 0
  let bobPoints = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliciaPoints += 1
    } else if (a[i] < b[i]) {
      bobPoints += 1
    } else {
       aliciaPoints, bobPoints
    }
  }

 
  if (aliciaPoints > bobPoints) {
    return "Alicia"
  } else if (bobPoints > aliciaPoints) {
    return "Bob"
  } else {
      return "Nobody"
  }

}

console.log("The winner is " + findWinner(alicia, bob));

/* Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve
imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
- Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
você deve exibir a string &quot;Digital&quot; em vez do número.
- Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
você deve exibir a string &quot;House&quot; em vez disso.
- Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
deve exibir a string &quot;Digital House&quot; em vez do número. */


function digitalHouse(num1, num2) {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 == 0 && i % num2 == 0) {
            console.log( "Digital House")
        } else if (i % num1 == 0) {
            console.log( "Digital")
        } else if (i % num2 == 0) {
           console.log( "House")
        } else {
            console.log(i)
        }
    }

}

digitalHouse(2, 10)


//sumArray

let numbers = [5, 10, 12, 14, 50]

function addArray(array) {
    let total = 0

    for (let i = 0; i < array.length; i++) {

        total += array[i]
    }

    return total
}

console.log(addArray(numbers))


function arrayJoin(array) {
    return array.join("")
}

console.log(arrayJoin(numbers))