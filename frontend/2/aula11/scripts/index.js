const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", (event) => {
  /// Escreva aqui o seu código, seguindo estas orientações passo a passo:
  event.preventDefault();
  // 1. Obter o valor introduzido no input do e-mail.
  let email = document.querySelector("#email-input").value

  // 2. Obter o valor introduzido no input de senha.
  let password = document.querySelector("#password-input").value
  // 3. Obter o valor do input de rádio.
  let idade = document.getElementsByName("legalAge")
  
  
  // 4. Obter o valor do input com o checkbox.
  let privacidade = document.getElementsByName("termsAndConditions")

  let legalAge, privacidadeAccepted
  // 5. Validar se o utilizador for maior de idade. Caso contrário, mostramos uma mensagem de erro: "Tem de ser maior de idade para se registar no site".
  idade.forEach((element)=> {
     if (element.checked) {
      if(element.value == "true") {
        return legalAge = element.value
      } else {
        alert("Tem de ser maior de idade para se registar no site")
      }
    }
 })

  // 6. Validamos se o utilizador aceitou os termos e condições. Caso contrário, exibimos uma mensagem de erro: "Deve aceitar os termos e condições para se registar no site".
  privacidade.forEach((element) => {
    if (!element.checked) {
      alert("You need to accept terms and conditions")
    } else {
      return privacidadeAccepted = true
    }
  })
  // 7. Por fim, se tudo estiver correto, exibimos um objeto no console com as informações definidas pelo utilizador. 
  function user() {
  if (legalAge == "true" && privacidadeAccepted == true) {
  
    let userInfo = {
    email: email,
    password: password,
    maiorDeIdade: legalAge,
    privacidade: privacidadeAccepted
  }

  console.log(userInfo)
}
}
user()
});
