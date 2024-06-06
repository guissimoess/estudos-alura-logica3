function comprar () {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    checar(quantidade, tipoIngresso);
}

function checar (quantidade, tipoIngresso) {
    let quantidadeDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso.value}`).textContent);
    if (quantidade > quantidadeDisponivel) {
        alert ('Quantidade INDISPONÍVEL');
    } else {
        alert('Ingresso comprado com sucesso!');
        quantidadeDisponivel = quantidadeDisponivel - quantidade;
        document.getElementById(`qtd-${tipoIngresso.value}`).textContent = quantidadeDisponivel;
    }
}

