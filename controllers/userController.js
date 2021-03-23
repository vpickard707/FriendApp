const db = require("../models")

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
exports.userAuth = (req, res) => {
    res.status(200).send("User Content.");
  };

exports.updateByName = (req, res) => {  
    db.User
      .findOneAndUpdate({username: req.params.username}, {$set: req.body }, {new: true},
        (err, doc) => {
          if(err){
            console.log("err with update")
          }
          console.log(doc)
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };

