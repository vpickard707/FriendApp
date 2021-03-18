const db = require("../models");

// Defining methods for the booksController
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
    console.log(req)
    console.log(req.params.username)
    const username = { username: req.params.username }
    const profileData = {
      gender: req.body.gender, 
      politics: req.body.politics, 
      children: req.body.children, 
      drink: req.body.drink, 
      smoke: req.body.smoke, 
      cannabis: req.body.cannabis, 
      age: req.body.age,
      sign: req.body.sign,
    }
    db.Profile
      .findOneAndUpdate(username, {$set: profileData }, {new: true},
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