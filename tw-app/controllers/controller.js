var db = require("../models");


module.exports = {
    //movie methods, insert, update Blurb, select
    insertMovie: function(req,res) {
        db.Movie.create({
            movie_Name: req.params.movie_Name,
            api_id: req.params.api_id,
            user_id: req.params.user_id
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
            where: {movie_Name: req.params.movie_Name},
            attributes: ['movie_Name', 'api_id']
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
    }
}