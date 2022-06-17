const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./src/routes/filmes.routes')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/netflix-clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/', routes)

let msg = {msg:'Porta 3000 Ok! ------------'}
app.listen(3000, () => {
    console.table(msg);
})
