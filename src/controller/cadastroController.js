module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('cadastro', {tittle: 'Cadastro', css: [ 'cadastro.css', 'style.css', 'modal-login.css'], javascript: ['validacoes.js', 'api.js'] })
    }
}