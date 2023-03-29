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
            let result = await book.findAll({
                // include:[{
                //     model: book_genre,
                //     through: {
                //       attributes: ['book_id','genre_id'],
                //       where: {completed: true}
                //     }
                //   }]
            }
            )
            res.json(result)
        }
        catch(err){
            res.json(err)
        }
    }
    static async create(req, res){
        try{
            const {name, genre_id, price, book_id, pages, rating} = req.body
            let result = await book.create({
                name, price, book_id, pages, rating
            })

            let resultBookGenre = await book_genre.create(
                {
                    book_id, genre_id
                }
            )
            res.json(result)
            //add to junc table
            let author_id_filtered = await author.findOne({
                where: {
                    name: name_author
                },
                attributes: ['id']
            })
            // console.log(author_id_filtered.toJSON().id)
            author_id_filtered = author_id_filtered.toJSON().id
            console.log(Number(req.params.id))
            // await author_book.create({
            //     author_id: author_id_filtered,
            //     book_id: req.params.id
            // })
        }
        catch(err){
            res.json(err)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id
            let result = await book.destroy({
                where : {id}
            })

            let resultBookGenre = await book_genre.destroy(
                {
                    where: {book_id}
                }
            )
            res.json(result)
            
        } catch (err) {
            res.json(err)
            
        }
    }

    static async update(req,res) {
        try {
            const id = +req.params.id;
            const{name, price, book_id, pages, rating} = req.body;
            let result = await book.update(
                {
                    name, price, book_id, pages, rating
                },{
                where : {id}
            })

            result == 1 ? res.json("Book Telah Terubah") : res.json({
                message: "Book Belum Terubah"
            })
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = BookController