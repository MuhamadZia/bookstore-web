const route = require('express').Router()

route.get('/', (req, res) => {
    res.json({
        messaga : "Bookstore First Page"
    })
})

const authorRoutes = require('./author')
const bookRoutes = require('./book')
const genreRoutes = require('./genre')
const bookGenreRoutes = require('./book_genre')

route.use('/author', authorRoutes)
route.use('/book', bookRoutes)
route.use('/genre', genreRoutes)
route.use('/book_genre', bookGenreRoutes)

module.exports = route