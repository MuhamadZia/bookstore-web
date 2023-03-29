const bookRoute = require('express').Router()
const {bookController} = require('../controllers')

bookRoute.get('/', bookController.getBooks)
bookRoute.post('/add', bookController.create)
bookRoute.get('/delete/:id', bookController.delete)
bookRoute.post('/update/:id', bookController.update)


module.exports = bookRoute