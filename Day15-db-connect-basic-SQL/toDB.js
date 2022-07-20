require("dotenv").config();
const db = {
  host: `${process.env.HOST}`,
  user: `${process.env.USER}`,
  password: `${process.env.PASSWORD}`,
  database: `${process.env.DATABASE}`,
  port: `${process.env.PORT}`,
}
module.exports = db;