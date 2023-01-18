
module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('tela-obrigado', {tittle: 'Obrigado!', css: [ 'modalLogin.css', 'style.css', 'tela-obrigado.css'], javascript: ['modalLogin.js']})
    }
}