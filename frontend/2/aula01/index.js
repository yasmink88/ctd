let array = [1, 2, 4, 5]


let sum = 0
for (let i = 0; i < array.length; i++) {
    
    console.log("Array number = " + array[i])
    
    console.log(`Sum of ${sum} + ${array[i]} = ${sum += array[i]}`)
    
}

let tratamentoPersonalizado = confirm("Deseja um tratamento personalizado?")

