const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Teste get');
    res.json( { msg: 'Rota Funcionando'} )
})

app.listen(3000, () => {
    console.log('Porta 3000 Ok!');
})
