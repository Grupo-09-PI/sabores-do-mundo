module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('carrinho', {css: [ 'modal-login.css', 'style.css', 'cadastro.css'], javascript: 'validacoes.js' })
    }
}