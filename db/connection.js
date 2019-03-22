// DB connection with credentials .env
const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg')
const db = new Pool({
  connectionString: process.env.DATABASE_URL
})

module.exports = db
