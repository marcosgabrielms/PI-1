const temas = [
    '',
    'tema-adobe',
    'tema-monocromatico'
];

let indiceAtual = 0;

function alternarEstilo() {
    indiceAtual = (indiceAtual + 1) % temas.length;
    document.body.className = temas[indiceAtual];
}