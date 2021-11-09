function podeSubir(altura, acompanhada) {

if(altura > 1.4 && altura < 2) {
    return true
} else if ( altura < 1.4 && altura > 1.2 && acompanhada) {
    return true
} else if (altura < 1.2) {
    return false
}
else {
    return false
}
}

/* function podeSubir(altura, acompanhada) {

    if(altura > 1.4 && altura < 2) {
        console.log("Acesso autorizado")
    } else if ( altura < 1.4 && altura > 1.2 && acompanhada) {
        console.log("Acesso autorizado somente com acompanhante")
    } else if (altura < 1.2) {
        console.log("Acesso negado!")
    }
    else {
        console.log("Acesso negado!")
    }
} */

console.log(podeSubir(1.45, false), "Acesso autorizado") //allowed
console.log(podeSubir(1.45, true), "Acesso autorizado") //allowed
console.log(podeSubir(2.5, true), "Acesso negado!") //denied
console.log(podeSubir(2.5, false), "Acesso negado!") //denied
console.log(podeSubir(1.3, false), "Acesso negado!") //denied
console.log(podeSubir(1.3, true), "Acesso autorizado somente com acompanhante") //allowed
console.log(podeSubir(1.1, true), "Acesso negado!") //denied
console.log(podeSubir(1.1, false), "Acesso negado!") //denied