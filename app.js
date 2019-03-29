const express = require("express");
const app = express();
const users = require("./routes/users")
const PORT = 5000;
const session = require('express-session');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use('/users', users);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
});
