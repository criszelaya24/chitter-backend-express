// allows to get information from post request
const express = require("express");
const routes = express.Router();
routes.use(express.json());
routes.use(express.urlencoded({extended: true}));

routes.post('/signup', (req, res) => {
  const id = req.body.id;
  console.log(req.body.id);
  res.status(200).send({message:"Successfully welcome", id: id});
});
module.exports = routes;
