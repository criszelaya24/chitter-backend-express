// DB connection with credentials .env
const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg')
const db = new Pool({
  connectionString: process.env.DATABASE_URL
})

exports.newUser = function(req, res){
  const newUser = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }
      db.query("INSERT INTO users(name, username, email, password) values ($1, $2, $3, $4)",
      [newUser.name, newUser.username, newUser.email, newUser.password], (err, results) => {
        if (err) {
          throw err
        }
        res.status(200).json(results.rows)
      })
}

// exports.newUser = function(req, res) {
//   db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     res.status(200).json(results.rows)
//   })
// }
// (function(exports){
//   function newUser(req, res) {
//     const db = require("../db/connection")
//     const newUser = {
//       name: req.body.name,
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//     }
//     newUser.prototype.createUser = (newUser) => {
//       db.query("INSERT INTO users(name, username, email, password) values ($1, $2, $3, $4)",
//       newUser.name, newUser.username, newUser.email, newUser.password, (err, results) => {
//         if (err) {
//           throw err
//         }
//         res.status(200).json(results.rows)
//       })
//     };
//   }
//   exports.newUser = newUser;
// })(this);
