const { genre, book_genre, book} = require("../models");

class BookController {
  static async getGenre(req, res) {
    try {
      let result = await genre.findAll();
      res.render("genre/index.ejs", { result });
    } catch (err) {
      res.json(err);
    }
  }
  static async getInformation(req, res) {
    try {
      const id = Number(req.params.id);
      let result = await book_genre.findAll({include: [book],where:{genre_id: id}})
      res.render('genre/detail.ejs', {result})
    } catch (err) {
      res.json(err);
    }
  }
  static addPage(req, res) {
    res.render("genre/addPage.ejs"); //refere to file location
  }
  static async create(req, res) {
    try {
      const { name, genre_id } = req.body;
      let result = await genre.create({
        name,
        genre_id,
      });
      res.redirect("/genre");
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await genre.destroy({
        where: { id },
      });

      result == 1
        ? res.redirect("/genre")
        : res.json({
            message: "Genre Belum Terhapus",
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {
    try {
      const id = Number(req.params.id);
      let result = await genre.findByPk(id);
      res.render("genre/updatePage.ejs", { result });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, genre_id } = req.body;
      let result = await genre.update(
        {
          name,
          genre_id,
        },
        {
          where: { id },
        }
      );

      result == 1
        ? res.redirect("/genre")
        : res.json({
            message: "Genre Belum Terubah",
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = BookController;
