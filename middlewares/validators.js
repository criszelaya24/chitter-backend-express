
exports.hasEmtyfieldsFornewUSer = function(req, res, next) {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password
  if ( name === "" || username === "" || email === "" || password === "") {
        res.status(302).send({error:"Error, empty fields"});
        return;
  }
  next();
}

exports.hasEmtyfieldsforLogin = function(req, res, next){
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.send(302).send({error: "Error, empty fields"});
    return;
  }
  next();
}

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
