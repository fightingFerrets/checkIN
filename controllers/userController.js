const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        console.log("HEllo")
        console.log("findAll", req.body);
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        console.log("findbyID", req.params.id)
        db.User
            .find({ userId: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log("findbyID", err), res.status(422).json(err);
            })
    },
    create: function (req, res) {
        console.log("create", req.body);
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};