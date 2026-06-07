const API_URL = 'https://api.binance.com/api/v3/ticker/price?symbol=';

const moedaBaseSelect = document.getElementById('moedaBase');
const moedaConversaoSelect = document.getElementById('moedaConversao');
const resultadoDiv = document.getElementById('resultado');

async function consultarPreco() {
  const moedaBase = moedaBaseSelect.value;
  const moedaConversao = moedaConversaoSelect.value;

  if (!moedaBase || !moedaConversao) {
    exibirErro('Selecione as duas moedas antes de consultar.');
    return;
  }

  exibirCarregando();

  try {
    const symbol = moedaBase + moedaConversao;
    const url = API_URL + symbol;

    const resposta = await fetch(url);

    if (!resposta.ok) {
      exibirErro(`Par inválido: ${symbol}. Tente outra combinação.`);
      return;
    }

    const dados = await resposta.json();

    if (!dados.price) {
      exibirErro('Resposta inválida da API. Tente novamente.');
      return;
    }

    const precoFormatado = formatarPreco(dados.price);
    exibirResultado(precoFormatado, symbol);

  } catch (erro) {
    console.error('Erro na requisição:', erro);
    exibirErro('Erro de conexão. Verifique sua internet e tente novamente.');
  }
}

function formatarPreco(preco) {
  return parseFloat(preco).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function limparCampos() {
  moedaBaseSelect.value = '';
  moedaConversaoSelect.value = '';
  resultadoDiv.innerHTML = '<span class="result-label">O resultado será exibido aqui</span>';
  resultadoDiv.className = 'result-box';
}

function inverterMoedas() {
  const temp = moedaBaseSelect.value;
  moedaBaseSelect.value = moedaConversaoSelect.value;
  moedaConversaoSelect.value = temp;
}

function exibirCarregando() {
  resultadoDiv.className = 'result-box';
  resultadoDiv.innerHTML = '<div class="loading"></div>';
}

function exibirResultado(precoFormatado, symbol) {
  resultadoDiv.className = 'result-box success';
  resultadoDiv.innerHTML = `
    <span class="result-label">Cotação atual</span>
    <span class="result-value">${precoFormatado}</span>
    <span class="result-pair">${symbol}</span>
  `;
}

function exibirErro(mensagem) {
  resultadoDiv.className = 'result-box error';
  resultadoDiv.innerHTML = `<span class="result-error">⚠ ${mensagem}</span>`;
}

document.getElementById('btnConsultar').addEventListener('click', consultarPreco);
document.getElementById('btnLimpar').addEventListener('click', limparCampos);
document.getElementById('btnInverter').addEventListener('click', inverterMoedas);