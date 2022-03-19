const botaoEnviar = document.getElementById('botaoEnviar');


console.log(newCard)
function executar() {
    //grabbing form info
    let formUrl = document.getElementById('url').value
    let formPais = document.getElementById('pais').value
    let formDescricao = document.getElementById('descricao').value

    //insert info into card
}

botaoEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    executar() 
})