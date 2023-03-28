const bookRoute = require('express').Router()
const {bookController} = require('../controllers')

bookRoute.get('/', bookController.getBooks)
bookRoute.get('/add', bookController.create)


module.exports = bookRoute