const express = require("express");
const routes = express.Router();
const validator = require("../middlewares/validators")
const auth = require("../middlewares/auth")
const user = require("../models/users")

// login & log out
routes.post('/signup', auth.isLoggedin, validator.hasEmtyfieldsFornewUSer, user.newUser);
routes.post('/login',auth.isLoggedin, validator.hasEmtyfieldsforLogin, user.logIn);
routes.get('/logout', auth.isNotLoggedin, user.loggOut)
module.exports = routes;
