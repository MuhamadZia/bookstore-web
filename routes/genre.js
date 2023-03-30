const genreRoute = require('express').Router()
const {genreController} = require('../controllers')

genreRoute.get('/', genreController.getGenre)
genreRoute.get('/add', genreController.addPage)
genreRoute.post('/add', genreController.create)
genreRoute.get('/information/:id', genreController.getInformation)
genreRoute.get('/delete/:id', genreController.delete)
genreRoute.get('/update/:id', genreController.updatePage)
genreRoute.post('/update/:id', genreController.update)

module.exports = genreRoute