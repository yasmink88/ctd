function teste1(x,y) {
    return y-x;
}

console.log(teste1(10,40));

//simple functions

//1. inches to cm
function inToCm(x) {
    let result = x * 2.54;
    console.log(result)
}

inToCm(2)

//2. string to url
function stringToUrl(string) {
    return `https://www.${string}.com`
}

console.log(stringToUrl("facebook"))

//3. !
function Oh(string) {
    return `${string}!`
}

console.log(Oh("Hakuna Matata"))

//4. dog age
function dogAge(age) {
    return age * 7
}

console.log(dogAge(5))

//5. hourly rate
function hourlyRate(salary, hours) {
    return salary / hours
}

console.log(hourlyRate(4000, 160))

//6. bmi
function bmi(weight, height) {
    return weight / ((height /100 * height /100))
}

console.log(bmi(70, 160))

//7. uppercase

function toUpperCase(string) {
    return string.toUpperCase()
}

//8. Data type
console.log(toUpperCase("i love dogs"))

function dataType(data) {
    return typeof(data)
}

console.log(dataType(1))
console.log(dataType("Yasmin"))

//9. circle circumference

function circleCircumference(r) {
    return 2 * Math.PI * r
}

console.log(circleCircumference(2))