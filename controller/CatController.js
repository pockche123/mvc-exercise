const Cat = require('../model/Cat')

const index = (req, res) => {
    const cats = Cat.getAll()
    res.status(200).send({data:cats})
}

const show = (req, res) => {
    try {
        const catId = parseInt(req.params.id)
        const cat = Cat.findById(catId)
        res.status(200).send({data: cat})
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

const create = (req, res) => {
    try {
        const data = req.body 
        const newCat = Cat.create(data)
        res.status(201).send({data: newCat})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

const update = (req, res) => {
    try {
        const catToUpdate = Cat.findById(parseInt(req.params.id))
        const updatedCat = catToUpdate.update(req.body)
        res.status(200).send({data: updatedCat})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

const destroy = (req, res) => {
    try {
        const catToDelete = Cat.findById(parseInt(req.params.id))
        catToDelete.delete()
        res.status(201).end()
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}



module.exports = {index, show, create, update, destroy}