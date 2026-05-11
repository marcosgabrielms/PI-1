// Questão 1
function exibirMensagemErro(mensagem, idComponente) {
    var componente = document.getElementById(idComponente);
    componente.innerHTML = mensagem;
    componente.classList.remove("oculto");
    
    setTimeout(function() {
        componente.classList.add("oculto");
    }, 3000);
}

// Questão 2
document.getElementById("btnExibirTexto").addEventListener("click", function() {
    var texto = document.getElementById("campoTexto").value.trim();
    var resultado = document.getElementById("resultadoTexto");
    
    if (texto === "") {
        resultado.innerHTML = "";
        exibirMensagemErro("O campo não pode estar vazio.", "erroTexto");
    } else {
        resultado.innerHTML = texto;
    }
});

// Questão 3
document.getElementById("btnCalcularEngajamento").addEventListener("click", function() {
    var interacoes = document.getElementById("interacoes").value;
    var visualizacoes = document.getElementById("visualizacoes").value;
    var resultado = document.getElementById("resultadoEngajamento");
    
    if (interacoes === "" || visualizacoes === "" || isNaN(interacoes) || isNaN(visualizacoes) || parseFloat(visualizacoes) === 0) {
        resultado.innerHTML = "";
        exibirMensagemErro("Valores inválidos. Insira números (visualizações não pode ser zero).", "erroEngajamento");
    } else {
        var taxaEngajamento = (parseFloat(interacoes) / parseFloat(visualizacoes)) * 100;
        resultado.innerHTML = "Engajamento: " + taxaEngajamento.toFixed(2) + "%";
    }
});

// Questão 4
document.getElementById("btnCarregarImagem").addEventListener("click", function () {
    var uploadImagem = document.getElementById("uploadImagem");
    var resultadoImagem = document.getElementById("resultadoImagemQ4");

    resultadoImagem.innerHTML = "";

    if (uploadImagem.files.length === 0) {
        return;
    }

    var arquivoSelecionado = uploadImagem.files[0];

    var img = document.createElement("img");
    img.src = URL.createObjectURL(arquivoSelecionado);

    resultadoImagem.appendChild(img);
});

// Questão 5
document.getElementById("selectImagens").addEventListener("change", function() {
    var valorSelecionado = this.value;
    var resultadoImagem = document.getElementById("resultadoImagemQ5");
    resultadoImagem.innerHTML = "";
    
    if (valorSelecionado !== "") {
        var img = document.createElement("img");
        img.src = valorSelecionado;
        resultadoImagem.appendChild(img);
    }
});

// Questão 6
document.getElementById("btnRedesSociais").addEventListener("click", function() {
    var checkboxes = document.getElementsByName("redesSociais");
    var redesSelecionadas = [];
    var resultado = document.getElementById("resultadoRedes");
    
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            redesSelecionadas.push(checkboxes[i].value);
        }
    }
    
    if (redesSelecionadas.length === 0) {
        resultado.innerHTML = "";
        exibirMensagemErro("Selecione pelo menos uma rede social.", "erroRedes");
    } else {
        resultado.innerHTML = "Selecionadas: " + redesSelecionadas.join(", ");
    }
});

// Questão 7
// Questão 8
document.getElementById("btnAdicionarHashtag").addEventListener("click", function() {
    var hashtag = document.getElementById("campoHashtag").value.trim();
    var selectHashtags = document.getElementById("selectHashtags");
    var campoInput = document.getElementById("campoHashtag");
    
    if (hashtag === "") {
        exibirMensagemErro("A hashtag não pode ser vazia.", "erroHashtag");
        return;
    }
    
    if (hashtag.length < 2) {
        exibirMensagemErro("A hashtag deve ter 2 ou mais caracteres.", "erroHashtag");
        return;
    }
    
    if (selectHashtags.options.length >= 5) {
        exibirMensagemErro("O limite é de 5 hashtags.", "erroHashtag");
        return;
    }
    
    for (var i = 0; i < selectHashtags.options.length; i++) {
        if (selectHashtags.options[i].value.toLowerCase() === hashtag.toLowerCase()) {
            exibirMensagemErro("Esta hashtag já foi adicionada.", "erroHashtag");
            return;
        }
    }
    
    var option = document.createElement("option");
    option.value = hashtag;
    option.innerHTML = "#" + hashtag;
    selectHashtags.appendChild(option);
    campoInput.value = "";
});

// Questão 9
document.getElementById("btnRemoverHashtag").addEventListener("click", function() {
    var selectHashtags = document.getElementById("selectHashtags");
    var selecionadas = selectHashtags.selectedOptions;
    
    if (selecionadas.length > 0) {
        selectHashtags.removeChild(selecionadas[0]);
    } else {
        exibirMensagemErro("Selecione uma hashtag para remover.", "erroHashtag");
    }
});

// Questão 10
// Questão 11
var ativosDisponiveis = document.getElementById("ativosDisponiveis");
var carteiraInvestimentos = document.getElementById("carteiraInvestimentos");
var btnMoverDireita = document.getElementById("btnMoverDireita");
var btnMoverEsquerda = document.getElementById("btnMoverEsquerda");

function gerenciarEstadoBotoes() {
    btnMoverDireita.disabled = ativosDisponiveis.options.length === 0;
    btnMoverEsquerda.disabled = carteiraInvestimentos.options.length === 0;
}

btnMoverDireita.addEventListener("click", function() {
    var selecionados = ativosDisponiveis.selectedOptions;
    if (selecionados.length === 0) {
        exibirMensagemErro("Selecione um item disponível para mover.", "erroAtivos");
    } else {
        while (selecionados.length > 0) {
            carteiraInvestimentos.appendChild(selecionados[0]);
        }
        gerenciarEstadoBotoes();
    }
});

btnMoverEsquerda.addEventListener("click", function() {
    var selecionados = carteiraInvestimentos.selectedOptions;
    if (selecionados.length === 0) {
        exibirMensagemErro("Selecione um item da carteira para voltar.", "erroAtivos");
    } else {
        while (selecionados.length > 0) {
            ativosDisponiveis.appendChild(selecionados[0]);
        }
        gerenciarEstadoBotoes();
    }
});

gerenciarEstadoBotoes();