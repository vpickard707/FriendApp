const db = require("../models");

// Defining methods for the interestsController
module.exports = {
  findAll: function(req, res) {
    db.Matches
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  doubleEntry: function(req, res) {
    db.Matches
      .insertMany(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.Matches
      .find({currentUser: req.params.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};