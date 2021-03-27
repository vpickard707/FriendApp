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
  findMatch: function(req, res) {
    db.Profile
      .find({username: {$in: req.query.list}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  filter: function(req,res) {    
    db.Profile
    .find({
      gender: { $in: req.query.gender},
      politics: { $in: req.query.politics},
      age: { $gt: req.query.age[0], $lt: req.query.age[1]},
      smoke: { $in: req.query.smoke},
      drink: { $in: req.query.drink},
      cannabis: { $in: req.query.cannabis},
      children: { $in: req.query.children}
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
        (err) => {
          if(err){
            console.log("err with update")
          }
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