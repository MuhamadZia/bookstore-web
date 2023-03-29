const authorRoute = require('express').Router()
const {authorController} = require('../controllers')

authorRoute.get('/', authorController.getAuthor)
authorRoute.post('/add', authorController.create)
authorRoute.get('/delete/:id', authorController.delete)
authorRoute.post('/update/:id', authorController.update)

module.exports= authorRoute