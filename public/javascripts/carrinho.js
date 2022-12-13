//let addCarrinho = document.getElementsByClassName('comprar-agora');
const addCarrinho = document.querySelector('.add-carrinho');
const accessKey = document.querySelector('.titulo-produto > h5');

addCarrinho.addEventListener('click', function() {
    localStorage.setItem('nomeProduto', accessKey)
})


const conteinerCarrinho = document.querySelector('.tabela-itens-carrinho');

const carrinho = JSON.parse(localStorage.getItem('carrinho'));

carrinho.forEach(item => {

    conteinerCarrinho.innerHTML += `
    <div class="tabela-itens-carrinho">
                <div class="linha-de-produto" id="first-produto">
                    <div class="foto-produto">
                        <img src="${item.imagem}" alt="">
                    </div>
                    <div class="nome-produto">
                        <h3>${item.nome}</h3>
                    </div>
                    <div class="preco-unitário" >
                        <h4>${item.valor}</h4>
                    </div>
                    <div class="quantidade-produto">
                        <input type="number" placeholder="Qtd" value="${item.quantidade}" > 
                    </div>
                    <div class="subtotal">
                        <h4>${item.valor}</h4>
                    </div>
                    <div class="excluir">
                        <a href="#"><img src="../images/body-main/lixeira.png" alt=""></a>
                    </div>
                </div>
            </div>
    
    `
})