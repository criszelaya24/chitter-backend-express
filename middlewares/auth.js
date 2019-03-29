exports.isLoggedin = function(req, res, next){
  if (req.session.loggedIn) {
    res.status(302).send({error: "User already loggedIn"})
    return
  }
  next();
}

exports.isNotLoggedin = function(req, res, next){
  if (req.session.loggedIn === false) {
    res.status(302).send({error: "User not loggedIn"})
    return
  }
  next();
}
