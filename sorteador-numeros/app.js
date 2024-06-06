
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
}

function gerarNumeroAleatorio (numeroMinimo, numeroMaximo) {
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
}

function exibirNumerosSorteados(numerosSorteados) {
    let resultado = document.getElementById('resultado2');
    resultado.innerHTML = ('Números sorteados: ' + numerosSorteados);
}