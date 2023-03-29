const {author} = require('../models')

class AuthorController{
    static async getAuthor(req,res){
        try{
            let authors = await author.findAll()
            res.json(authors)
        }
        catch(err){
            res.json(err)
        }
    }
    static async create(req, res){
        try{
            const {name, gender, author_id, country_code} = req.body
            let result = await author.create({
                name, gender, author_id, country_code
            })
            res.json(result)
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

module.exports = AuthorController