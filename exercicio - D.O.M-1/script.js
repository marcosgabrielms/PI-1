function contarParagrafos() {
    let caixa = document.getElementById("caixa-paragrafos");
    let paragrafos = caixa.getElementsByTagName("p");
    let resultado = document.getElementById("resultado-contagem");

    resultado.innerText = "Total de parágrafos na div:" + paragrafos.length; 
}

function alterarTexto(){
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.innerText = "O texto foi alterado"
}

function limparTexto(){
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.innerText="";
}

let botaoContar = document.getElementById("botaoContar");
let botaoAlterar = document.getElementById("botaoAlterar");
let botaoLimpar = document.getElementById("botaoLimpar");

botaoContar.addEventListener("click", contarParagrafos);
botaoAlterar.addEventListener("click", alterarTexto);
botaoLimpar.addEventListener("click", limparTexto);