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
    db.Profile
    .find({
      gender: { $in: req.query.gender},
      politics: { $in: ["Moderate"]},
      smoke: "Socially",
      age: { $gt: 24, $lt: 40},
  })
      // .where("gender").in(['Female', 'Male'])
      // .where("age").gt('23').lt('40')
      // .where("politics").in(["Liberal", "Moderate"])
      // .where("smoke").equals('Socially')
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
      .findOneAndUpdate(req.params.username, {$set: req.body }, {new: true},
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