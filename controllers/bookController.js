const {book, author, author_book} = require('../models')

class BookController{
    static async getBooks(req, res){
        try{
            let books = await book.findAll({
                include:[{
                    model: author,
                    attributes: ['name','author_id'],
                    through: {
                        attributes: []
                    }
                }]
            })
            res.json(books)
        }
        catch(err){
            res.json(err)
        }
    }
    static async create(req, res){
        try{
            const {name, genre, price, book_id, pages, rating, name_author} = req.body
            let result = await book.create({
                name, genre, price, book_id, pages, rating
                })
            res.json(result)
            //add to junc table
            let author_id_filtered = await author.findOne({
                where: {
                    name: name_author
                },
                attributes: ['author_id']
            })

            author_id_filtered = author_id_filtered.toJSON().author_id
            console.log(author_id_filtered)
            await author_book.create({
                author_id: author_id_filtered,
                book_id: book_id
            })
        }
        catch(err){
            res.json(err)
        }
    }

}

module.exports = BookController