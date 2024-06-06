let totalGeral;
limpar ()

function adicionar () {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split(' - ')[0];
    let valorProduto = produto.split('R$')[1];
    let total = valorProduto * quantidade;

    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${total}</span>
        </section>`;
    totalGeral = totalGeral + total;

    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = `R$${totalGeral}`;
    document.getElementById('quantidade').value = '';

}

function limpar () {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
}