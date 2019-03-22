// allows to get information from post request
const express = require("express");
const routes = express.Router();
const validator = require("../middlewares/validators")
// DB connection with credentials .env
const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg')
const connectionString = process.env.DATABASE_URL
const db = new Pool({
  connectionString: connectionString,
})
// lines to use JSON on post request
routes.use(express.json());
routes.use(express.urlencoded({extended: true}));

routes.post('/signup', validator.hasEmtyfields, (req, res) => {
  db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});
module.exports = routes;
