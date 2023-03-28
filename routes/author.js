const authorRoute = require('express').Router()
const {authorController} = require('../controllers')

authorRoute.get('/', authorController.getAuthor)
authorRoute.get('/add', authorController.create)

module.exports= authorRoute