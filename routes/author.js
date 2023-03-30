const authorRoute = require('express').Router()
const {authorController} = require('../controllers')

authorRoute.get('/', authorController.getAuthor)
authorRoute.get('/add', authorController.addPage)
authorRoute.post('/add', authorController.create)
authorRoute.get('/information/:id', authorController.getInformation)
authorRoute.get('/delete/:id', authorController.delete)
authorRoute.get('/update/:id', authorController.updatePage)
authorRoute.post('/update/:id', authorController.update)

module.exports= authorRoute