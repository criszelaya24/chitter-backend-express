const express = require("express");
const app = express();
const PORT = 5000;
const session = require('express-session');
const users = require("./routes/users")
const chitters = require("./routes/chitters");

// lines to use JSON on post request
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use('/chitters', chitters);
app.use('/users', users);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
});
