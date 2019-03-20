exports.hasEmtyfields = function(req, res, next) {
  const id = req.body.id;
  if ( id === "") {
        res.status(302).send({message:"Error, id empty"});
  }
  next();
}
