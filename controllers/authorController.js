const {author} = require('../models')

class AuthorController{
    static async getAuthor(req,res){
        try{
            let result = await author.findAll()
            res.render('author/index.ejs', {result})
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

}

module.exports = AuthorController