module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('cadastro-produto', {tittle: 'Cadastro de produto', css: [ 'cadastro-produto.css', 'style.css', 'cadastro.css'], javascript: 'validacoes.js' })
    }
}