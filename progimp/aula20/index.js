const pessoas = require("./pessoas");

/* Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
a média das idades das pessoas que responderam ótimo;
a quantidade de pessoas que responderam regular;
a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
 */

function avgAge(array) {
  let age = [];
  let avgAge = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].opniao == 3) {
        age.push(Number(array[i].idade))
    }
}

  let sum = age.reduce((acc, num) => acc + num, 0);

  return `Average age: ${parseInt(avgAge = sum / age.length)}`;
}


function regularVotes(array) {
  return `There are ${array.filter((i) => i.opniao == 1).length} people who voted regular.`;
}


function percentageGood(array) {

  return `${(array.filter((i) => i.opniao == 2).length / array.length) * 100}% of people voted good.`;
}

console.log(avgAge(pessoas));
console.log(regularVotes(pessoas));
console.log(percentageGood(pessoas));
