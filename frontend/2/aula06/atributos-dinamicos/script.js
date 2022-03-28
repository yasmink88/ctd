// 1- Adiciona ao cartão, o atributo "class" com o valor "cartao"
let cartao = document.getElementById("cartao");
cartao.setAttribute("class", "cartao");

// 2- Adicione o atributo "src" à imagem com o valor "https://www.youtube.com/img/desktop/yt_1200.png"
let img = document.getElementById("logo");
logo.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");

// 3- Remova a classe "titulo-feio" do título do documento
let title = document.querySelector(".coluna-2 h1");
title.removeAttribute("class");

// 4- Verifique se o link para o YouTube tem o atributo href ou não, e imprima esse resultado no console
let youtube = document.getElementById("link_youtube");
if (youtube.hasAttribute("href")) {
  console.log(youtube.getAttribute("href"));
} else {
  console.log("No href found!");
}

// 5- Capture o valor de href do link do Wikipedia e exiba no console
let wikipedia = document.getElementById("link_wikipedia");
console.log(wikipedia.getAttribute("href"));
