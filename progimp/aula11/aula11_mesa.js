let filmes = ["stars wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"]

function uppercaseArray(array) {
   
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].toUpperCase())
        
    }
return newArray
}

console.log(uppercaseArray(filmes))

let animations = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

function joinArrays(array1, array2) {
    let deletedItem = array2.pop();
 for (let i = 0; i < array2.length; i++) {
     array1.push(array2[i])
 }

 return array1;
}

console.log(joinArrays(filmes, animations))

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const europeScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function compareRatings(asia, europe) {
    for (i = 0; i < asia.length; i++) {
        console.log(asia[i] === europe[i])
    }
}

compareRatings(asiaScores, europeScores)
