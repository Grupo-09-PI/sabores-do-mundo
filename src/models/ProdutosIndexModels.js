const produtos = require('./produtos.json')

module.exports = {
    index: () => {
      return produtos
    }
}