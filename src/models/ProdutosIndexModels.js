const produtos = require('../database/produtos.json')
const fs = require('fs')
const path = require('path')

module.exports = {
    index: () => {
      return produtos
    },
    criaUmProduto: (req) => {
      let novoProduto = {
        id: produtos.at(-1).id + 1,
        nome: req.body.nome,
        valorVenda: req.body.valorVenda,
        valorSemDesconto: req.body.valorSemDesconto,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        imagem: req.body.imagem
      }
      produtos.push(novoProduto)
      fs.writeFileSync( path.join(__dirname, '../database/produtos.json'), JSON.stringify(produtos, 4))
    },
    produtoId: (req) => {
      console.log(req)
     // produtos.filter(produto.id)

    }
    
}