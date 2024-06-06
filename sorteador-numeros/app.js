
function sortear () {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);
    let numeroSorteado;
    let numerosSorteados = [];
    
    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numeroSorteado = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
        if (numerosSorteados.includes(numeroSorteado)) {
            i--;
        }
        else {
            numerosSorteados.push(numeroSorteado);
        }
    }
    exibirNumerosSorteados(numerosSorteados);
    alterarStatusBotao();
}

function gerarNumeroAleatorio (numeroMinimo, numeroMaximo) {
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
}

function exibirNumerosSorteados(numerosSorteados) {
    let resultado = document.getElementById('resultado2');
    resultado.innerHTML = (`Números sorteados: ${numerosSorteados}`);
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado2').innerHTML = 'Números sorteados:  nenhum até agora';
    alterarStatusBotao();
}

