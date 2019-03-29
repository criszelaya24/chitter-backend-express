const db = require("../db/connection")
exports.all = function(req, res) {
  db.query("select chitters.userId, users.username, chitters.title, chitters.body, chitters.date, chitters.id from users inner join chitters on users.id = chitters.userid order by date DESC").then(function(data){
    if (data.rowCount == 0) {
      res.status(200).send({message: "Not chitters in DB"})
      return
    }
    res.status(200).send({message: data.rows})
  })
}
