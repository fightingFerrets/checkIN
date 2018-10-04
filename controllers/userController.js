const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        console.log("HEllo")
        console.log("findAll", req.body);
        db.User
            .find(req.query)
            .then(dbModel => {
                console.log("userController", dbModel[0]._id);
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        console.log("findbyID", req.params.id)
        db.User
            .findById(req.params.id)
            .then(dbModel => {
                console.log("find One", dbModel);
                res.json(dbModel)
            })

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
    },
    doesExist: function (req, res) {
        db.User
            .findOne({ userId: req.params.id })
            .then(dbModel => {
                console.log("does-exist", dbModel)
                let user = {
                    exist: false
                }
                if (dbModel == null) {
                    res.status(200).json(user)
                } else {
                    user = {
                        exist: true,
                        _id: dbModel._id
                    }
                    res.status(200).json(user)
                }
            })
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    }
};