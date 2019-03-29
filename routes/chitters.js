const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/auth")
const validator = require("../middlewares/validators");
const chitters = require("../models/chitters")

routes.get('/', auth.isNotLoggedin, chitters.all)
routes.post('/new', auth.isNotLoggedin, validator.hasEmtyfieldsNewchitter, chitters.new)

module.exports = routes;
