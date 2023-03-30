const bookRoute = require('express').Router()
const {bookController} = require('../controllers')

bookRoute.get('/', bookController.getBooks)
bookRoute.get('/add', bookController.addPage)
bookRoute.post('/add', bookController.create)
bookRoute.get('/information/:id', bookController.getInformation)
bookRoute.get('/delete/:id', bookController.delete)
bookRoute.get('/update/:id', bookController.updatePage)
bookRoute.post('/update/:id', bookController.update)


module.exports = bookRoute