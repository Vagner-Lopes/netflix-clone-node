const mongoose = require('mongoose')
const Filme = mongoose.model('Filme', {
    "nome" : {
        type: String,
        required: true
    },
    "categoria" : {
        type: String,
        required: true
    },
    "link" :  {
        type: String,
        required: true
    },
    "ano" : {
        type: Number,
        required: true
    },
    "detalhes": Object,
    "atores" : [String],
    "premiacoes" : [Object],
})

module.exports = Filme