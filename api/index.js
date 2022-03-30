const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./rotas/clientes')
const app = express()

app.use(bodyParser.json())

app.use('/api/clientes', roteador)

app.listen(config.get('api.porta'), () =>{
    console.log("Api rodando normalmente");
})
