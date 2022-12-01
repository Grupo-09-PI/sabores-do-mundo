
module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('painel-usuario', {css: [ 'modalLogin.css', 'style.css', 'slider.css'], javascript: ['slider.js', 'modalLogin.js', 'hamburger.js' ] })
    }
}