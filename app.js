const express = require("express");
const app = express();
// allows to get information from post request
app.use(express.json());
app.use(express.urlencoded());


app.post('/login', (req, res) => {
  const id = req.body.id;
  console.log(req.body.id);
  res.status(200).send({message:"Successfully welcome", id: id});
});

app.listen(5000, () => {
  console.log(`app listening on port ${5000}`)
});
