
module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('login', {tittle: 'Login', css: ['modalLogin.css', 'style.css', 'login.css'], javascript: 'modalLogin.js'})
    }
}