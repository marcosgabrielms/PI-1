let h1Saudacao = document.getElementById('saudacao');
let divResultado = document.getElementById('resultado');

divResultado.innerText = h1Saudacao.innerText;

let botao1 = document.getElementById('botao1');

botao1.addEventListener('click', () => {
    alert('Clicou no botão 1')
});

let botao2 = document.getElementById('botao2');

botao2.addEventListener('click', () => {
    alert('Clicou no botão 2')
})

let botao3 = document.getElementById('botao3');
let resultado3 = document.getElementById('resultado3');
let contador = 0;

botao3.addEventListener('click', () => {
    contador = contador + 1;
    resultado3.innerText = contador;
})

function getByID(id){
    return document.getElementById(id);
}

let somar = getByID('somar');
let resultado = getByID('resultadoSoma');

somar.addEventListener('click', () => {
    let n1 = getByID('n1').value;
    let n2 = getByID('n2').value;
    let soma = parseFloat(n1) + parseFloat(n2);
    resultadoSoma.innerText = soma;
})

let estado = getByID('estado');
estado.addEventListener('change', () => {
    let opcao = estado.value;
    let resultadoEstado = getByID('resultadoEstado');
    resultadoEstado.innerText = opcao;
});

let corTexto = getByID('corTexto');
let corFundo = getByID('corFundo');

corTexto.addEventListener('input', () => {
    document.body.style.color = corTexto.value;
});

corFundo.addEventListener('input', () => {
    document.body.style.backgroundColor = corFundo.value;
})

let ligado = getByID('ligado')
ligado.addEventListener('click', () =>{
    let resultadoLigado = getByID('resultadoLigado');
    if (ligado.checked) {
        resultadoLigado.innerText = "Ligado";
    }  else {
        resultadoLigado.innerText = "Desligado";
    }
});