module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('empresa', {tittle: 'Empresa', css: ['modal-login.css', 'style.css']})
    }
}