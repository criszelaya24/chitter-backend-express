const express = require("express");
const app = express();
const users = require("./routes/users")
const PORT = 5000;
app.use('/users', users);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
});
