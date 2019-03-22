const db = require("../db/connection")

exports.newUser = function(req, res){
  const newUser = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }
      db.query("INSERT INTO users(name, username, email, password) values ($1, $2, $3, $4)",
      [newUser.name, newUser.username, newUser.email, newUser.password], (err) => {
        if (err) {
          res.status(302).json(err.detail);
          return
        }
        res.status(200).json({message: "User save successfully"})
      })
}
