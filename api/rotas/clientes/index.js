const roteador = require('express').Router()
const tabelaCliente = require('./tabelaCliente')
const TabelaCliente = require('./tabelaCliente')

roteador.use('/', async (req, res) => {
    const resultado = await tabelaCliente.listar()
    res.send(
        JSON.stringify(resultado)
    )
})

module.exports = roteador