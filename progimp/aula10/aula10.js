/*Micro desafio*/
/* Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN)
 */
let produtos = ["Leite", "Queijo", "Iogurte", "Café"]
let cores = ["Red", "Blue", "Black", "White"]

console.log(produtos.join(" - ")) // converts array to string with separator, default is a comma
console.log(produtos.pop()) // removes last element of array and returns it
console.log(produtos.push("Pão")) // adds elements at the end of array and returns new length of array
console.log(produtos.shift()) // removes first element of array and returns it
console.log(produtos.unshift("Suco")) // adds an element to the beginning of and returns new length of array
console.log(produtos)

/* Acessar elementos específicos de um array.
Modificar cada um dos elementos de um array e imprimi-los no console.
Adicionar elementos a um array.
Extrair elementos de um array.
Comparar elementos de um array com os elementos de outro.  */

console.log(cores[2])
cores[0] = "Brown"
cores[1] = "Pink"
cores[2] = "Green"
cores[3] = "Yellow"
console.log(cores)
console.log(cores.unshift("White"))
console.log(cores.push("Black"))
console.log(cores.shift())
console.log(cores.pop())
console.log(cores[2] == produtos[2])

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length]) // undefined

let amigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(amigos[1][0]) // Spiderman

let str = "una string qualquer"
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) //5