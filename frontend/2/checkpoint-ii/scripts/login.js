let loginEmail = document.querySelector("#inputEmail")
let loginPass = document.querySelector("#inputPassword")
let loginBtn = document.querySelector("#loginBtn")

let loginEmailValue, loginPassValue

loginBtn.addEventListener("click", (event) => {
    event.preventDefault()

    if(loginEmail.value != "" && loginPass.value != "") {
        
        loginEmailValue = lowercase(trim(loginEmail.value))
        loginPassValue = trim(loginPass.value)

    } else {
        alert("Insert email and/or password")
        
    }
})

loginEmail.addEventListener("blur", () => {
    let emailError = document.querySelector("#emailError")

    if(loginEmail.value != "") {
        loginEmail.style.border = ""
        emailError.innerText = ""
    } else {
        emailError.innerText = "Fill in your email"
        emailError.style.color = "red"
        emailError.style.display = "flex"
        loginEmail.style.border = "1px solid red"
    }
})