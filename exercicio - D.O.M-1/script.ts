// Questões 2 e 3
function contarParagrafosTS(): void {
    let caixa = document.getElementById("caixa-paragrafos") as HTMLDivElement;
    let paragrafos: HTMLCollectionOf<HTMLParagraphElement> = caixa.getElementsByTagName("p");
    let resultado = document.getElementById("resultado-contagem") as HTMLDivElement;
    resultado.innerText = "Total de parágrafos na div: " + paragrafos.length; 
}
let botaoContarTS = document.getElementById("botaoContar") as HTMLButtonElement;
botaoContarTS.addEventListener("click", contarParagrafosTS);

// Questão 4
function alterarTextoTS(): void {
    let paragrafo = document.getElementById("paragrafo") as HTMLParagraphElement;
    paragrafo.innerText = "O texto foi alterado";
}
function limparTextoTS(): void {
    let paragrafo = document.getElementById("paragrafo") as HTMLParagraphElement;
    paragrafo.innerText = "";
}
let botaoAlterarTS = document.getElementById("botaoAlterar") as HTMLButtonElement;
let botaoLimparTS = document.getElementById("botaoLimpar") as HTMLButtonElement;
botaoAlterarTS.addEventListener("click", alterarTextoTS);
botaoLimparTS.addEventListener("click", limparTextoTS);

// Questão 6
function modificarCSSTS(): void {
    let quadrado = document.getElementById("quadrado-alvo") as HTMLDivElement;
    quadrado.style.backgroundColor = "var(--amarelo-detalhe)";
    quadrado.style.borderRadius = "50%";
    quadrado.style.width = "200px";
}
let botaoEstiloTS = document.getElementById("botaoEstilo") as HTMLButtonElement;
botaoEstiloTS.addEventListener("click", modificarCSSTS);

// Questão 7
function copiarTextoTS(): void {
    let inputOrigem = document.getElementById("textoOrigem") as HTMLInputElement;
    let inputDestino = document.getElementById("textoDestino") as HTMLInputElement;
    inputDestino.value = inputOrigem.value.toUpperCase();
}
let botaoCopiarTS = document.getElementById("botaoCopiar") as HTMLButtonElement;
botaoCopiarTS.addEventListener("click", copiarTextoTS);

// Questão 8
function aplicarContrasteTS(): void {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
}
function resetarCoresTS(): void {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
}
let botaoContrasteTS = document.getElementById("botaoContraste") as HTMLButtonElement;
let botaoResetTS = document.getElementById("botaoReset") as HTMLButtonElement;
botaoContrasteTS.addEventListener("click", aplicarContrasteTS);
botaoResetTS.addEventListener("click", resetarCoresTS);

// Questão 9
let tamanhoFonteTS: number = 16;
function aumentarFonteTS(): void {
    tamanhoFonteTS += 2;
    document.body.style.fontSize = tamanhoFonteTS + "px";
}
function diminuirFonteTS(): void {
    tamanhoFonteTS -= 2;
    document.body.style.fontSize = tamanhoFonteTS + "px";
}
let botaoAumentarTS = document.getElementById("botaoAumentar") as HTMLButtonElement;
let botaoDiminuirTS = document.getElementById("botaoDiminuir") as HTMLButtonElement;
botaoAumentarTS.addEventListener("click", aumentarFonteTS);
botaoDiminuirTS.addEventListener("click", diminuirFonteTS);

// Questão 10
function calcularTS(): void {
    let n1: number = parseFloat((document.getElementById("calcNum1") as HTMLInputElement).value);
    let n2: number = parseFloat((document.getElementById("calcNum2") as HTMLInputElement).value);
    let resultado = document.getElementById("resultadoCalculo") as HTMLDivElement;
    let valorFinal: number = 0;

    let opSoma = document.getElementById("opSoma") as HTMLInputElement;
    let opSub = document.getElementById("opSub") as HTMLInputElement;
    let opMult = document.getElementById("opMult") as HTMLInputElement;
    let opDiv = document.getElementById("opDiv") as HTMLInputElement;

    if (opSoma.checked) valorFinal = n1 + n2;
    else if (opSub.checked) valorFinal = n1 - n2;
    else if (opMult.checked) valorFinal = n1 * n2;
    else if (opDiv.checked) valorFinal = n1 / n2;

    resultado.innerText = "Resultado: " + valorFinal;
}
let botaoCalcularTS = document.getElementById("botaoCalcular") as HTMLButtonElement;
botaoCalcularTS.addEventListener("click", calcularTS);

// Questão 11
function adicionarNaListaTS(): void {
    let texto: string = (document.getElementById("textoNovoElemento") as HTMLInputElement).value;
    let lista = document.getElementById("listaDinamica") as HTMLUListElement;
    let novoLi = document.createElement("li") as HTMLLIElement;
    novoLi.innerText = texto;
    lista.appendChild(novoLi);
}
let botaoAddListaTS = document.getElementById("botaoAddLista") as HTMLButtonElement;
botaoAddListaTS.addEventListener("click", adicionarNaListaTS);

// Questão 12
function adicionarNoSelectTS(): void {
    let texto: string = (document.getElementById("textoNovoElemento") as HTMLInputElement).value;
    let select = document.getElementById("selectDinamico") as HTMLSelectElement;
    let novaOpcao = document.createElement("option") as HTMLOptionElement;
    novaOpcao.text = texto;
    novaOpcao.value = texto;
    select.appendChild(novaOpcao);
}
let botaoAddSelectTS = document.getElementById("botaoAddSelect") as HTMLButtonElement;
botaoAddSelectTS.addEventListener("click", adicionarNoSelectTS);