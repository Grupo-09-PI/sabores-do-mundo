const ProdutosIndexModels = require('../models/ProdutosIndexModels')

module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('painel-usuario', {tittle: 'Usuário', css: [ 'modalLogin.css', 'style.css', 'slider.css'], javascript: ['slider.js', 'modalLogin.js', 'hamburger.js' ] })
    },
    showAdmin: (req, res) => {
        const produtosIndex = ProdutosIndexModels.index();
        return res.render('admin', {produtosIndex, tittle: 'Usuário', css: [ 'modalLogin.css', 'style.css', 'slider.css', 'admin.css'], javascript: ['slider.js', 'modalLogin.js', 'hamburger.js', 'adicionarAoCarrinho.js' ] })
    }
}