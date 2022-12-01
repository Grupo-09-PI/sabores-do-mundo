
module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('login', {css: ['modalLogin.css', 'style.css', 'login.css']})
    }
}