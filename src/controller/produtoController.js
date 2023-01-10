
module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('produto', {tittle: 'Produto', css: [ 'modalLogin.css', 'style.css', 'produto.css'], javascript: ['modalLogin.js']})
    }
}