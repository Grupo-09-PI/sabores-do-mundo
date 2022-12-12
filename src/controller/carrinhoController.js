module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('carrinho', {tittle: 'Carrinho', css: [ 'modalLogin.css', 'style.css', 'carrinho.css'], javascript: ['validacoes.js', 'modalLogin.js', 'carrinho.js']  })
    }
}