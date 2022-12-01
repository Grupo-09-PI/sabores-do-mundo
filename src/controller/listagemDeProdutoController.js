
module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('listagemDeProdutos.ejs', {css: ['modalLogin.css', 'style.css', 'listagemDeProdutos.css']})
    }
}