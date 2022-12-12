
module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('listagemDeProdutos.ejs', {tittle: 'Produtos', css: ['modalLogin.css', 'style.css', 'listagemDeProdutos.css'], javascript: 'modalLogin.js'})
    }
}