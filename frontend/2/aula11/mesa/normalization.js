const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const submitBtn = document.getElementById("submitBtn")
let results = document.getElementById("results")

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let firstNameValue = firstName.value
    let lastNameValue = lastName.value

    let nameComplete = firstNameValue.concat(' ', lastNameValue)

    results.innerHTML = `
    Trim: ${firstNameValue.trim()} ${lastNameValue.trim()}
    <br>
    Uppercase: ${firstNameValue.toUpperCase()} ${lastNameValue.toUpperCase()}
    <br>
    Lowercase: ${firstNameValue.toLowerCase()} ${lastNameValue.toLowerCase()}
    <br>
    Concat: ${firstNameValue.concat(' ', lastNameValue)}
    <br>
    Replace: ${nameComplete.replaceAll('a', '@').replaceAll('e', '3')}
    `
})