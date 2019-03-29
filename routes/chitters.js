const express = require("express");
const routes = express.Router();
const validator = require("../middlewares/validators")
const chitters = require("../models/chitters")

routes.get('/', validator.isNotLoggedin, chitters.all)

module.exports = routes;
