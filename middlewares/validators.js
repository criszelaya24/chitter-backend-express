
exports.hasEmtyfieldsFornewUSer = function(req, res, next) {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password
  if ( name === "" || username === "" || email === "" || password === "") {
        res.status(302).send({error:"Error, empty fields to signup"});
        return;
  }
  next();
}

exports.hasEmtyfieldsforLogin = function(req, res, next){
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.status(302).send({error: "Error, empty fields to log in"});
    return;
  }
  next();
}

exports.hasEmtyfieldsNewchitter = function(req, res, next) {
  const title = req.body.title;
  const body = req.body.body;
  if (title === "" || body === "") {
    res.status(302).send({error: "Error, Empty fiels to create a chitter"})
    return
  }
  next();
}
