const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// require('dotenv').config();
const connectDB = require('./toDB')

app.get("/user", (req, res) => {
  const connection = mysql.createConnection(connectDB);
  // const connection = mysql.createConnection({
  //   host: `${process.env.HOST}`,
  //   user: `${process.env.USER}`,
  //   password: `${process.env.PASSWORD}`,
  //   database: `${process.env.DATABASE}`,
  //   port: `${process.env.PORT}`
  // });
  
  // เปิด connection ไปที่ database
  connection.connect();

  connection.query("SELECT city, last_update from city", (err, rows, fields) => {
    if (err) throw err;

    // return response กลับไปหา client โดยแปลง record เป็น json array
    res.status(200).json(rows);

    // ปิด connection
    connection.end();
  });
});

app.listen(3000, () => console.log("Server start on port 3000"));
