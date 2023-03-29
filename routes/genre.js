const genreRoute = require('express').Router()
const {genreController} = require('../controllers')

genreRoute.get('/', genreController.getGenre)
genreRoute.post('/add', genreController.create)
genreRoute.get('/delete/:id', genreController.delete)
genreRoute.post('/update/:id', genreController.update)


module.exports = genreRoute