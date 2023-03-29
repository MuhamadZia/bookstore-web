const bookGenreRoute = require('express').Router()
const {bookGenreController} = require('../controllers')

bookGenreRoute.get('/', bookGenreController.getBookGenre)
bookGenreRoute.post('/add', bookGenreController.create)
bookGenreRoute.get('/delete/:id', bookGenreController.delete)
bookGenreRoute.post('/update/:id', bookGenreController.update)


module.exports = bookGenreRoute