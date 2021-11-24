let socialMedia = {
    "Nome" : "Yasmin Khalaf",
    "Apelido" : "Yas",
    "Idade" : 33,
    "Usuario": "yasmink88",
    "Email": "yasmin@email.com"
}


function ContaBancaria(conta, tipo, saldo, titular) {
    this.numConta = conta
    this.tipoConta = tipo
    this.saldo = saldo
    this.titular = titular
}

let conta1 = new ContaBancaria(5486273622, "Conta Corrente", 27771, "Abigael Natte" )
let conta2 = new ContaBancaria(1183971869, "Conta Poupança", 8675, "Ramon Connell" )
let conta3 = new ContaBancaria(9582019689, "Conta Poupança", 27363, "Jarret Lafuente" )
let conta4 = new ContaBancaria(1761924656, "Conta Poupança", 32415, "Ansel Ardley" )
let conta5 = new ContaBancaria(7401971607, "Conta Poupança", 18789, "Jacki Shurmer" )
let conta6 = new ContaBancaria(630841470, "Conta Corrente", 28776, "Jobi Mawtus" )
let conta7 = new ContaBancaria(4223508636, "Conta Corrente", 2177, "Thomasin Latour" )
let conta8 = new ContaBancaria(185979521, "Conta Poupança", 25994, "Lonnie Verheijden" )
let conta9 = new ContaBancaria(3151956165, "Conta Corrente", 7601, "Alonso Wannan	" )
let conta10 = new ContaBancaria(2138105881, "Conta Poupança", 33196, "Bendite Huggett" )


let contas = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10]


let banco = {
    clientes: contas,
}
console.log(banco.clientes[0])