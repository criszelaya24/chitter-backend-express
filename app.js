const express = require("express");
const app = express();
const users = require("./routes/users")

app.use('/users', users);

app.listen(5000, () => {
  console.log(`app listening on port ${5000}`)
});
