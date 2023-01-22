const ProdutosIndexModels = require("../models/ProdutosIndexModels")

module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('cadastro-produto', {tittle: 'Cadastro de produto', css: [ 'cadastro-produto.css', 'style.css', 'cadastro.css'], javascript: ['validacoes.js', 'modalLogin.js'] })
    },
    criaServico: (req, res) => {
        ProdutosIndexModels.criaUmProduto(req)
        res.send("O produto de nome " + req.body.nome + " foi criado com sucesso!")
    }
}