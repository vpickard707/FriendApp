const db = require("../models");
const User = db.User;

checkIsUniqueUser = (req, res, next) => {

    //check username
    User.findOne({
        username: req.body.username
    })
    .exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return
        }

        if (user) {
            res.status(400).send({ message: "Sorry! That username is already in use."});
            return;
        }

        //check email
        User.findOne({
            email: req.body.email
        })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return
            }
    
            if (user) {
                res.status(400).send({ message: "Sorry! That email is already in use."});
                return;
            }
            
            next()
        })
    })
}

const verifySignUp = {
    checkIsUniqueUser
};

module.exports = verifySignUp