const express = require("express");

const { getUsers } = require("../controllers/user-controller");

const router = new express.Router();

router.get("/users", getUsers);

module.exports = router;
