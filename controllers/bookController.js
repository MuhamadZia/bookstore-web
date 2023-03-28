const {book} = require('../models')

class BookController{
    static async getBooks(req, res){
        try{
            let books = await book.findAll()
            res.json(books)
        }
        catch(err){
            res.json(err)
        }
    }
    static async create(req, res){
        try{
            const {name, genre, price, book_id, pages, rating} = req.body
            let result = await book.create({
                name, genre, price, book_id, pages, rating
            })
            res.json(result)
        }
        catch(err){
            res.json(err)
        }
    }

}

module.exports = BookController