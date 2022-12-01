module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('empresa', {css: ['modal-login.css', 'style.css']})
    }
}