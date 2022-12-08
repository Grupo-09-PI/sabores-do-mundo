//let addCarrinho = document.getElementsByClassName('comprar-agora');
const addCarrinho = document.querySelector('.add-carrinho');
const accessKey = document.querySelector('.titulo-produto > h5');

addCarrinho.addEventListener('click', function() {
    localStorage.setItem('nomeProduto', accessKey)
})

