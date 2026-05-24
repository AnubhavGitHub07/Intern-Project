const express = require("express");

const { registerUser } = require("../controllers/userControllers"); //importing register user controller

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;

