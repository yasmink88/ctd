const registerBtn = document.querySelector(".register-btn");
const logoutBtn = document.querySelector("#logout-btn")

const mainContent = document.querySelector("main");
const statusContainer = document.querySelector("#status-container");
const sessionLoader = document.querySelector("#loader");


registerBtn.addEventListener("click", (event) => {
  event.preventDefault();

  
  let email = document.querySelector("#email-input").value;
  let privacidade = document.getElementsByName("termsAndConditions");


  let privacidadeAccepted;

  // Validamos se o utilizador aceitou os termos e condições. Caso contrário, exibimos uma mensagem de erro: "Deve aceitar os termos e condições para se registar no site".
  privacidade.forEach((element) => {
    if (!element.checked) {
      alert("You need to accept terms and conditions");
    } else {
      return (privacidadeAccepted = true);
    }
  });

  //Por fim, se tudo estiver correto, exibimos um objeto no console com as informações definidas pelo utilizador.
  function signIn() {
    if (privacidadeAccepted == true) {
      if (localStorage.user == null) {
        localStorage.user = email;
        statusContainer.classList.remove("hidden");
        setTimeout(() => {
          mainContent.innerHTML = `
          <h1>Welcome ${email}</h1>
          <button class="register-btn" id="logout-btn" onclick="logout()">Logout</button>
          `;;
        }, 2000);
      }

    }
  }
  signIn();
});

if (localStorage.user != null) {
  mainContent.innerHTML = `
  <h1>Welcome ${localStorage.user}</h1>
  <button class="register-btn" onclick="logout()">Logout</button>
  `;
}

function logout() {
  
    localStorage.removeItem('user')
    document.location.reload()

}
