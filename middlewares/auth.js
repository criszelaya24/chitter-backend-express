exports.isLoggedin = function(req, res, next){
  if (req.session.loggedIn) {
    res.status(302).send({error: "User already loggedIn"})
    return
  }
  next();
}

exports.isNotLoggedin = function(req, res, next){
  console.log(req.session.loggedIn);
  if (req.session.loggedIn === false  || req.session.loggedIn === undefined) {
    res.status(302).send({error: "User not loggedIn"})
    return
  }
  next();
}
