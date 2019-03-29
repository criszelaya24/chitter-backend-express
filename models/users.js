const db = require("../db/connection")
const bcrypt = require('bcrypt');

exports.newUser = function(req, res){
  const salt = bcrypt.genSaltSync(10);
  const plainPassword = req.body.password;
  const hashedPassword =  bcrypt.hashSync(plainPassword, salt)
  const newUser = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        passwordHashed: hashedPassword
      }
      db.query("INSERT INTO users(name, username, email, password) values ($1, $2, $3, $4)",
      [newUser.name, newUser.username, newUser.email, newUser.passwordHashed], (err) => {
        if (err) {
          res.status(302).json(err.detail);
          return
        }
        res.status(200).json({message: "User save successfully"})
      })
}

exports.logIn = function (req, res) {
  const user = {
        username: req.body.username,
        plainPassword: req.body.password,
        hashedPassword: ""
      }
      db.query("SELECT * from users WHERE username = $1", [user.username]).then(function (data){
        if (data.rowCount === 0) {
          res.status(302).send({error: "User doesn't exist"})
          return
        }
        user.hashedPassword = data.rows[0].password;
        const error = bcrypt.compareSync(user.plainPassword, user.hashedPassword)
          if (error) {
            res.status(200).send("password correct")
          } else{
            res.status(302).send("password incorrect")
          }
        })
      }
