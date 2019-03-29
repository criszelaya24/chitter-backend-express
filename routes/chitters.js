const express = require("express");
const routes = express.Router();
const validator = require("../middlewares/validators")
const chitters = require("../models/chitters")

routes.get('/', validator.isNotLoggedin, chitters.all)
routes.post('/new', validator.isNotLoggedin, chitters.new)

module.exports = routes;
