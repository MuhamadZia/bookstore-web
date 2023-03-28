const route = require('express').Router()

route.get('/', (req, res) => {
    res.json({
        messaga : "Bookstore First Page"
    })
})

const authorRoutes = require('./author')
const bookRoutes = require('./book')
const genreRoutes = require('./genre')

route.use('/author', authorRoutes)
route.use('/book', bookRoutes)
route.use('/genre', genreRoutes)

module.exports = route