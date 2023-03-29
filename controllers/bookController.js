const {book, author, author_book, book_genre} = require('../models')
const { Op } = require("sequelize");

class BookController{
    static async getBooks(req, res){
        try{
            let books = await book.findAll(
            //     {
            //     include:[{
            //         model: author,
            //         attributes: ['name','author_id'],
            //         through: {
            //             attributes: []
            //         }
            //     }]
            // }
            )
            res.json(books)
        }
        catch(err){
            res.json(err)
        }
    }
    static async create(req, res){
        try{
            const {name, price, pages, rating, author_id, genre_id, book_id} = req.body
            let result = await book.create({
                name, price, book_id, pages, rating
            })

            await book_genre.create(
                {
                    book_id, genre_id
                }
            )

            await author_book.create(
                {
                    author_id,
                    book_id
                }
            )
            res.json(result)
            //add to junc table
            // let author_id_filtered = await author.findOne({
            //     where: {
            //         name: name_author
            //     },
            //     attributes: ['id']
            // })
            // // console.log(author_id_filtered.toJSON().id)
            // author_id_filtered = author_id_filtered.toJSON().id
            // console.log(Number(req.params.id))
            // // await author_book.create({
            // //     author_id: author_id_filtered,
            // //     book_id: req.params.id
            // // })
        }
        catch(err){
            res.json(err)
        }
    }

    static async delete(req, res) {
        try {
            //get all required id there will be destroyed
            const id = +req.params.id
            let book_data = await book.findByPk(id)
            let book_id_filtered = book_data.book_id
            let author_data = await author_book.findAll({
                attributes:['id'],
                where: {
                    book_id:book_id_filtered
                }
            })
            let id_author_book = author_data.map((item)=>{
                return item.id
            })
            let genre_data = await book_genre.findAll({
                attributes:['id'],
                where: {
                    book_id:book_id_filtered
                }
            })
            let id_book_genre = genre_data.map((item)=>{
                return item.id
            })

            //destroy row in book
            let result = await book.destroy({
                where : {id}
            })

            //destroy row/s in book_genre
            await book_genre.destroy(
                {
                    where: {
                        id:{[Op.in]: id_book_genre}
                    }
                }
            )
            
            //destroy row/s in author_book
            await author_book.destroy(
                {
                    where: {
                        id:{[Op.in]: id_author_book}
                    }
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