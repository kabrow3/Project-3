const db = require("../models")

module.exports = {

    findAll: (req, res) => {
        db.Dummy
        .find({})
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        db.Dummy
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
      },

}