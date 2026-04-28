// Questões 2 e 3
function contarParagrafos() {
    let caixa = document.getElementById("caixa-paragrafos");
    let paragrafos = caixa.getElementsByTagName("p");
    let resultado = document.getElementById("resultado-contagem");

    resultado.innerText = "Total de parágrafos na div: " + paragrafos.length; 
}
let botaoContar = document.getElementById("botaoContar");
botaoContar.addEventListener("click", contarParagrafos);

// Questão 4
function alterarTexto(){
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.innerText = "O texto foi alterado";
}
function limparTexto(){
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.innerText = "";
}
let botaoAlterar = document.getElementById("botaoAlterar");
let botaoLimpar = document.getElementById("botaoLimpar");
botaoAlterar.addEventListener("click", alterarTexto);
botaoLimpar.addEventListener("click", limparTexto);

// Questão 6
function modificarCSS() {
    let quadrado = document.getElementById("quadrado-alvo");
    
    quadrado.style.backgroundColor = "var(--amarelo-detalhe)";
    quadrado.style.borderRadius = "50%";
    quadrado.style.width = "200px";
}
let botaoEstilo = document.getElementById("botaoEstilo");
botaoEstilo.addEventListener("click", modificarCSS);

// Questão 7
function copiarTexto() {
    let inputOrigem = document.getElementById("textoOrigem").value;
    let inputDestino = document.getElementById("textoDestino"); 

    inputDestino.value = inputOrigem.toUpperCase();
}
let botaoCopiar = document.getElementById("botaoCopiar");
botaoCopiar.addEventListener("click", copiarTexto);

// Questão 8
function aplicarContraste() {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
}
function resetarCores() {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
}
let botaoContraste = document.getElementById("botaoContraste");
let botaoReset = document.getElementById("botaoReset");
botaoContraste.addEventListener("click", aplicarContraste);
botaoReset.addEventListener("click", resetarCores);

// Questão 9
let tamanhoFonte = 16;
function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}
function diminuirFonte() {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}
let botaoAumentar = document.getElementById("botaoAumentar");
let botaoDiminuir = document.getElementById("botaoDiminuir");
botaoAumentar.addEventListener("click", aumentarFonte);
botaoDiminuir.addEventListener("click", diminuirFonte);

// Questão 10
function calcular() {
    let n1 = parseFloat(document.getElementById("calcNum1").value);
    let n2 = parseFloat(document.getElementById("calcNum2").value);
    let resultado = document.getElementById("resultadoCalculo");
    let valorFinal = 0;

    if (document.getElementById("opSoma").checked) {
        valorFinal = n1 + n2;
    } else if (document.getElementById("opSub").checked) {
        valorFinal = n1 - n2;
    } else if (document.getElementById("opMult").checked) {
        valorFinal = n1 * n2;
    } else if (document.getElementById("opDiv").checked) {
        valorFinal = n1 / n2;
    }

    resultado.innerText = "Resultado: " + valorFinal;
}
let botaoCalcular = document.getElementById("botaoCalcular");
botaoCalcular.addEventListener("click", calcular);

// Questão 11
function adicionarNaLista() {
    let texto = document.getElementById("textoNovoElemento").value;
    let lista = document.getElementById("listaDinamica");
    
    let novoLi = document.createElement("li");
    novoLi.innerText = texto;
    lista.appendChild(novoLi);
}
let botaoAddLista = document.getElementById("botaoAddLista");
botaoAddLista.addEventListener("click", adicionarNaLista);

// Questão 12
function adicionarNoSelect() {
    let texto = document.getElementById("textoNovoElemento").value;
    let select = document.getElementById("selectDinamico");
    
    let novaOpcao = document.createElement("option");
    novaOpcao.text = texto;
    novaOpcao.value = texto;
    select.appendChild(novaOpcao);
}
let botaoAddSelect = document.getElementById("botaoAddSelect");
botaoAddSelect.addEventListener("click", adicionarNoSelect);