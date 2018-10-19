var db = require("../models");


module.exports = {
    //movie methods, insert, update Blurb, select
    insertMovie: function(req,res) {
        db.Movie.create({
            title: req.params.title,
            imdbID: req.params.imdbID
        }).then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    },
    updateMovieBlurb: function(req, res) {
        db.Movie.update(req.body, {
            where: {
                BlurbId: req.params.BlurbId
            }
        }).then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    },
    findMovie: function(req,res) {
        db.Movie.findOne({
            where: {title: req.params.title},
            attributes: ['title', 'imdbID']
        }).then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    },
    // blurb methods, create blurb, update blurb
    insertBlurb: function(req,res) {
        db.Blurb.create({
            blurb: req.body.blurb,
            UserId: req.body.UserId
        }).then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    },
    updateBlurb: function(req,res) {
        db.Blurb.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    },
    findBlurb: function(req, res) {
        var imdbID = req.params.imdbID
        db.sequelize
            .query(
                "select blurb from blurbs where id in (select distinct BlurbID from movies where imdbID = ?",
                {replacements: [imdbID]}
            ).then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    }
}