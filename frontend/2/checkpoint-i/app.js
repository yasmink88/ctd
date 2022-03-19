const botaoEnviar = document.getElementById('botaoEnviar');


console.log(newCard)
function executar() {
    //grabbing form info
    let formUrl = document.getElementById('url').value
    let formPais = document.getElementById('pais').value
    let formDescricao = document.getElementById('descricao').value

    //adding from values to cards
    let newContent = `
    <img src="${formUrl}" alt="">
    <h2>${formPais}</h2>
    <p>${formDescricao}</p>`

}

botaoEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    executar() 
})