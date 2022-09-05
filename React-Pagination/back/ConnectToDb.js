
require("dotenv").config();

const DB = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  port: process.env.PORT,
}

module.exports = { DB }