const config = require("../config/auth.config");
const db = require("../models");
const User = db.User;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    user.save((err, user) => {
        
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "User was registered successfully!"})
    })
}

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })
    .exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (!user) {
            res.status(400).send({  message: "User not found." })
            return;
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            res.status(401).send({
                acessToken: null,
                message: "Invalid password."
            });
        }

        var token = jwt.sign(
            { id: user.id },
            config.secret,
            { expiresIn: 14400 // 4 hours
            });
        
        res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            accessToken: token,
            profile: user.profile
        });
    });
};