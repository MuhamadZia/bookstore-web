const {genre} = require('../models')

class BookController{
    static async getGenre(req, res){
        try{
            let result = await genre.findAll();
            res.json(result);
        }
        catch(err){
            res.json(err)
        }
    }
    static async create(req, res){
        try{
            const {name, genre_id} = req.body;
            let result = await genre.create({
                name, genre_id
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
            let result = await genre.destroy({
                where : {id}
            })

            result == 1 ? res.json("Genre Telah Terhapus") : res.json({
                message: "Genre Belum Terhapus"
            })
        } catch (err) {
            res.json(err);
        }
    }

    static async update(req,res) {
        try {
            const id = +req.params.id;
            const{name, genre_id} = req.body;
            let result = await genre.update(
                {
                    name, genre_id
                },{
                where : {id}
            })

            result == 1 ? res.json("Genre Telah Terubah") : res.json({
                message: "Genre Belum Terubah"
            })
        } catch (err) {
            res.json(err);
        }
    }
    

}

module.exports = BookController