module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('empresa', {tittle: 'Empresa', css: ['modalLogin.css', 'style.css'], javascript: ['modalLogin.js']})
    }
}