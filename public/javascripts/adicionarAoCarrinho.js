const btnsAdd = document.querySelectorAll('.add-carrinho');

btnsAdd.forEach((btn, i) => {
    const nomeProduto = document.querySelector(`#produto-${i} .titulo-produto > h5`).innerText
    const imagemProduto = document.querySelector(`#produto-${i} #imagemProduto`).src
    const valorProduto = document.querySelector(`#produto-${i} #valorProduto`).innerText

    const produto = {
        id: `${i+1}`,
        nome: nomeProduto,
        valor: valorProduto,
        imagem: imagemProduto,
        quantidade: 1
    }

    btn.addEventListener('click', () => {
        if (localStorage.getItem('carrinho') == null) {
            carrinho = [produto]
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
            return alert('Item Adicionado no carrinho com sucesso')
        }
        carrinho = JSON.parse(localStorage.getItem('carrinho'))
        if (!carrinho.find(item => item.id == produto.id)) {
            alert('Item Adicionado no carrinho com sucesso')
            carrinho.push(produto)
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
        } else {
            carrinho.forEach(item => {
                if (item.id != produto.id) return
                alert('Item Adicionado no carrinho com sucesso')
                item.quantidade++
                localStorage.setItem('carrinho', JSON.stringify(carrinho))
            })
        }

    })

})