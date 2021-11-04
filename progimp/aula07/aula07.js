console.log(!true, "false") 
console.log(!false, "true") 
console.log(!!false, "false")
console.log(!!true, "true") 
console.log(!1, "false")
console.log(!!1, "true")
console.log(!0, "true")
console.log(!!0, "false")
console.log(!!"", "false") 
let x = 5;
let y = 9;
console.log(x, "5")
console.log( y, "9")
console.log(x < 10 && x!==5, "false")
console.log(x>9 || x===5, "true")
console.log(!(x===y), "false")

let d=10
let e ="a"
console.log("Ex2. 1 - false")
console.log(e==="b" || d >= 10)

let a=3
let b=8

console.log("Ex2. 2 - false")
console.log(!(a == "3" || a === b) && !(b !== 8 && a <= b))

let str = ""
let msg = "haha!"
let eBonito = "false"
console.log("Ex2. 3 - false")
console.log(!((str || msg) && eBonito))