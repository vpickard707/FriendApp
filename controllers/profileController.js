const db = require("../models");

// Defining methods for the profileController
module.exports = {
  findAll: function(req, res) {
    db.Profile
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Profile
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.Profile
      .find({username: req.params.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  filter: function(req,res) {
    console.log(req.query)
    const query = req.query

    db.Profile
    .find({
      gender: { $in: query.gender},
      politics: { $in: query.politics},
      age: { $gt: query.age[0], $lt: query.age[1]},
      smoke: { $in: query.smoke},
      drink: { $in: query.drink},
      cannabis: { $in: query.cannabis},
      children: { $in: query.children}
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Profile
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Profile
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateByName: function(req, res) {
    db.Profile
      .findOneAndUpdate({username: req.params.username}, {$set: req.body }, {new: true},
        (err, doc) => {
          if(err){
            console.log("err with update")
          }
          console.log(doc)
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Profile
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};