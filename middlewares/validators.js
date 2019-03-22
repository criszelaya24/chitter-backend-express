exports.hasEmtyfields = function(req, res, next) {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password
  if ( name === "" || username === "" || email === "" || password === "") {
        res.status(302).send({message:"Error, empty fields"});
        return;
  }
  next();
}
