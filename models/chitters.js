const db = require("../db/connection")
exports.all = function(req, res) {
  db.query("select chitters.userId, users.username, chitters.title, chitters.body, chitters.date, chitters.id from users inner join chitters on users.id = chitters.userid order by date DESC").then(function(data){
    res.status(200).send({message: data.rows})
  })
}

exports.new = function(req, res){

  const newChitter = {
    title: req.body.title,
    body: req.body.body,
    userid: req.session.userId,
  }
  db.query("INSERT INTO chitters(title, body, date, userid) values ($1, $2, NOW(), $3) RETURNING id", [newChitter.title, newChitter.body, newChitter.userid], function(err, result){
    if (err) {
      res.status(302).send({error: err})
      return
    }
    res.status(200).send({message: "Chitter saved successfully", data: result.rows})
  })
}
