const express = require("express");
const routes = express.Router();
const validator = require("../middlewares/validators")
const user = require("../models/users")

// lines to use JSON on post request
routes.use(express.json());
routes.use(express.urlencoded({extended: true}));

routes.post('/signup', validator.hasEmtyfields, user.newUser);
module.exports = routes;
