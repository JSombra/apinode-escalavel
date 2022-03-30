const modeloTabela = require('../rotas/clientes/modeloTabela')

modeloTabela
        .sync()
        .then(() => console.log('Tabela criada com sucesso'))
        .catch(console.log())