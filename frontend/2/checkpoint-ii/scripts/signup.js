const userName = document.querySelector("#nome");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const userconfirmPassword = document.querySelector("#confirmPassword");
const signUpBtn = document.querySelector("#signUp");

let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let confirmPasswordError = document.querySelector("#confirmPasswordError");

let userNameValue, userEmailValue, userPasswordValue, userconfirmPasswordValue;

userName.addEventListener("blur", () => {
  if (userName.value != "") {
    nameError.innerText = "";
    userName.style.border = "";
  } else {
    nameError.innerText = "Fill in your name";
    userName.style.border = "1px solid red";
  }
});

userEmail.addEventListener("blur", () => {
  if (userEmail.value != "") {
    emailError.innerText = "";
    userEmail.style.border = "";
  } else {
    emailError.innerText = "Fill in your email";
    userEmail.style.border = "1px solid red";
  }
});

userPassword.addEventListener("blur", () => {
  if (userPassword.value != "") {
    passwordError.innerText = "";
    userPassword.style.border = "";
  } else {
    passwordError.innerText = "Fill in your password";
    userPassword.style.border = "1px solid red";
  }
});

userconfirmPassword.addEventListener("blur", () => {
  if (userconfirmPassword.value != "") {
    confirmPasswordError.innerText = "";
    userconfirmPassword.style.border = "";
  } else {
    confirmPasswordError.innerText = "Confirm your password";
    userconfirmPassword.style.border = "1px solid red";
  }
});

signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();

  userNameValue = trim(userName.value);
  userEmailValue = lowercase(trim(userEmail.value));
  userPasswordValue = userPassword.value;
  userconfirmPasswordValue = userconfirmPassword.value;

  if (
    userNameValue != "" &&
    userEmailValue != "" &&
    userPasswordValue != "" &&
    userconfirmPasswordValue != ""
  ) {
    if (userPasswordValue !== userconfirmPasswordValue) {
      confirmPasswordError.innerText = "Password don't match";
      userconfirmPassword.style.border = "1px solid red";
    } else {
      console.log(
        userNameValue,
        userEmailValue,
        userPasswordValue,
        userconfirmPasswordValue
      );
    }
  } else {
    alert("Preencha todos os campos");
  }
});
