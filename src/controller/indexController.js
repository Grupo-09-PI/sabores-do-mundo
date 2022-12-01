const ProdutosIndexModels = require('../models/ProdutosIndexModels')

module.exports = {
    showIndex: (req, res) => {
        const produtosIndex = ProdutosIndexModels.index();
        //controler comunicando com a view
        return res.render('index', {produtosIndex, tittle: 'Sabores do mundo', css: [ 'modalLogin.css', 'style.css', 'slider.css'], javascript: ['slider.js', 'modalLogin.js', 'hamburger.js' ] })
    }
}