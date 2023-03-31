const {book_genre, book, genre} = require('../models')

class BookGenreController{
    static async getBookGenre(req, res){
        try{
            let result = await book_genre.findAll({
                include:[book, genre]
            });
            res.json(result);
        }
        catch(err){
            res.json(err)
        }
    }
    static async create(req, res){
        try{
            const {book_id, genre_id} = req.body;
            let result = await book_genre.create({
                book_id, genre_id
            })
            res.json(result);
        }
        catch(err){
            res.json(err)
        }
    }
    static async delete(req,res) {
        try {
            const id = +req.params.id;
            let result = await book_genre.destroy({
                where : {id}
            })

            result == 1 ? res.json("Book Genre Telah Terhapus") : res.json({
                message: "Book Genre Belum Terhapus"
            })
        } catch (err) {
            res.json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const {book_id, genre_id} = req.body;
            let result = await book_genre.update(
                {
                    book_id, genre_id
                },{
                    where: {id}
                }
            )
            result == 1 ? res.json("Book Genre Telah Terubah") : res.json({
                message: "Book Genre Belum Terubah"
            })
        } catch (err) {
            response.json(err)
        }
    }

}

module.exports = BookGenreController