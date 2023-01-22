const produtos = require('../database/produtos.json')

module.exports = {
    index: () => {
      return produtos
    }
}