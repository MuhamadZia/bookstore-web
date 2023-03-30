const {book, author, author_book, book_genre} = require('../models')
const { Op } = require("sequelize");

class BookController{
    static async getBooks(req, res){
        try{
            let result = await book.findAll({
            }
            )
            res.render("book/index.ejs", {result})
        }
        catch(err){
            res.json(err)
        }
    }
    static async getInformation(req,res){
        try{
            const id = Number(req.params.id)
            let result = await book.findByPk(id)
            res.json(result)
        }
        catch(err){
            res.json(err)
        }
    }
    static addPage(req,res){
        res.render('book/addPage.ejs') //refere to file location
    }
    static async create(req, res){
        try{
            const {name, price, pages, rating, author_id, genre_id, book_id} = req.body
            let result = await book.create({
                name, price, book_id, pages, rating
            })

            let id_book_new = result.id
            await book_genre.create(
                {
                    book_id:id_book_new, genre_id
                }
            )

            await author_book.create(
                {
                    author_id,
                    book_id:id_book_new
                }
            )
            res.json(result)
            // res.render('book/index.ejs', {result})
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

            let result = await book.destroy({
                where : {id}
            })

            await book_genre.destroy(
                {
                    where: {
                        id:{[Op.in]: id_book_genre}
                    }
                }
            )
            
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

    static async updatePage(req,res){
        try{
            const id = Number(req.params.id)
            let result = await book.findByPk(id)
            res.render('book/updatePage.ejs',{result})
        }
        catch(err){
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