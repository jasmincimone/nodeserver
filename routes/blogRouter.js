const express = require('express');

const data = require('../data/blogdata')

const blogRouter = express.Router();

blogRouter.get('/lear', (req, res) =>{
   res.status(200).json({message: "OH YEA!", blogdata: data})
})

blogRouter.post('/', (req, res) =>{
    let guest = req.body
    data.push(guest)

    res.status(201).json({message: "success", guest: guest})
})

blogRouter.get('/:id', (req, res) => {
    let id = Number(req.params.id)

    if(id >= data.length || id < 0){
        res.status(404).json({message: "Please enter a valid number"})
    }

    res.status(200).json({guest: data[id]})
})

blogRouter.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    let new_post = req.body
    if(id >= data.length || id < 0){
        res.status(404).json({message: "Please entera valid number."})
    }
    data[id] = new_post
    res.status(204).json({message: "DELETED"})
})





module.exports = blogRouter
