const { Router } = require("express");

const router = require("express").Router();
const friendController = require("../controllers/friendController");

// /api/friends
router.route("/").get(friendController.findAll).post(friendController.create);

//
router.route("/:id");
