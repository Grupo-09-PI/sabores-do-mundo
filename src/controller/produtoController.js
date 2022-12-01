
module.exports = {
    showIndex: (req, res) => {
        //controler comunicando com a view
        return res.render('produto', {css: [ 'modalLogin.css', 'style.css', 'produto.css']})
    }
}