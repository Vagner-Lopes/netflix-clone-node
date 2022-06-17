const express = require('express')
const router = express.Router()
const Filme = require('../models/Filme')


//--------LISTA TODOS OS FILMES---------//
router.get('/', async (req, res) => {
    try {
        const filmes = await Filme.find({})
        res.json( { error: false, filmes } )    
    } catch (err) {
        res.json( { error: true, msg: err.message } )    
    }
})


//--------LISTA FILME POR ID------------//
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const filme = await Filme.findById(id)
        res.json( { error: false, filme } ) 
    } catch (err) {
        res.json( { error: true, msg: err.message } )
    }
})


//--------REGISTRA UM NOVO FILME--------//
router.post('/', async (req, res) => {
    try {
        const filme = req.body
        const response = await new Filme(filme).save()
        res.json( { error: false, filme: response } )

    } catch (err) {
        res.json( { error: true, msg: err.message } )
    }
})


//--------ATUALIZA UM FILME POR ID------//
router.put('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const novos_dados = req.body
        const filme_atualizado = await Filme.findByIdAndUpdate(id, novos_dados)
        res.json( { error: false, filme_atualizado } )
    } catch (err) {
        res.json( { error: true, msg: err.message } )
    }
})


//--------DELETA UM FILME POR ID--------//
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Filme.findByIdAndDelete(id)
        res.json( { error: false, msg: 'Deletado com sucesso'} )
    } catch (err) {
        res.json( { error: true, msg: err.message } )
    }
})


module.exports = router