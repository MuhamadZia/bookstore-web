const {author} = require('../models')

class AuthorController{
    static async getAuthor(req,res){
        try{

            let result = await author.findAll()
            // res.json(result)
            
            res.render('author/index.ejs', {result})
                
        }
        catch(err){
            res.json(err)
        }
    }
    static async getInformation(req,res){
        try{
            const id = Number(req.params.id)
            let result = await author.findByPk(id)
            res.json(result)
            // return result
        }
        catch(err){
            res.json(err)
        }
    }
    static async updatePage(req,res){
        try{
            // let result = await this.getInformation(req,res)
            const id = Number(req.params.id)
            let result = await author.findByPk(id)
            // console.log(result)
            // res.json(result)
            res.render('author/updatePage.ejs',{author_data:result})
        }
        catch(err){
            res.json(err)
        }         
    }
    static addPage(req,res){
        res.render('author/addPage.ejs') //refere to file location
    }
    static async create(req, res){
        try{
            const {name, gender, author_id, country_code} = req.body
            let result = await author.create({
                name, gender, author_id, country_code
            })
            // res.json(result)
            res.redirect('/author') //redirect to link
        }
        catch(err){
            res.json(err)
        }
    }
    static async delete(req, res) {
        try {
            const id = +req.params.id
            let result = await author.destroy({
                where : {id}
            })

            res.redirect('/author')
            
        } catch (err) {
            res.json(err)
            
        }
    }

    static async update(req,res) {
        try {
            const id = +req.params.id;
            const{name, gender, author_id, country_code} = req.body;
            let result = await author.update(
                {
                    name, gender, author_id, country_code
                },{
                where : {id}
            })

            result == 1 ? res.redirect('/author') : res.json({
                message: "Author Belum Terubah"
            })

        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = AuthorController