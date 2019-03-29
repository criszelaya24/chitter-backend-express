const express = require("express");
const routes = express.Router();
const validator = require("../middlewares/validators")
const user = require("../models/users")

// login & log out
routes.post('/signup', validator.isLoggedin, validator.hasEmtyfieldsFornewUSer, user.newUser);
routes.post('/login',validator.isLoggedin, validator.hasEmtyfieldsforLogin, user.logIn);
routes.get('/logout', validator.isNotLoggedin, user.loggOut)
module.exports = routes;
