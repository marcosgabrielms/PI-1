const estilos =[
    'estilo-padrao.css',
    'estilo-adobe.css',
    'estilo-monocromatico.css'
];

let indiceAtual = 0;

function alternarEstilo() {

    indiceAtual = (indiceAtual + 1) % estilos.length;

    document.getElementById('estilo-blog').href = estilos[indiceAtual]
}