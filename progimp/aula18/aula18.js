/*
Loop de Pares
Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"
*/

function loopDePares(num) {
    for (let i = 0; i <= 100; i++) {
        let value = num + i
        if (value % 2 == 0) {
            console.log(`The number ${value} is even!`)
        } else {
            console.log(value)
        }
    }
}

/* loopDePares(2) */

/* 
Loop ímpares com palavra
Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.
 */

function loopDeImpares(number, word) {
    for (let i = 0; i <= 100; i++) {
        let value = number + i
        if (value % 2 != 0) {
            console.log(`${value} - ${word}`)
        } else {
            console.log(value)
        }
    }
}

/* loopDeImpares(2, "That's Odd!") */

/*
Soma
	Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.
Exemplo: 
soma(3) deve retornar 6 pois faz (1 +2 +3)
soma(8) deve retornar 36
 */

function soma(number) {
    
}