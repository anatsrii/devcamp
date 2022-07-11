const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// require('dotenv').config();

app.get("/user", (req, res) => {
  const connection = mysql.createConnection({
    // host: `${process.env.HOST}`,
    // user: `${process.env.USER}`,
    // password: `${process.env.PASSWORD}`,
    // port: `${process.env.PORT}`
    host: "34.126.137.203",
    user: "hero",
    password: "011866303",
    database: "aptos",
    port: "3306",
  });

  // เปิด connection ไปที่ database
  connection.connect();

  connection.query("SELECT * from user", (err, rows, fields) => {
    if (err) throw err;

    // return response กลับไปหา client โดยแปลง record เป็น json array
    res.json(rows);

    // ปิด connection
    connection.end();
  });
});

app.listen(3000, () => console.log("Server start on port 3000"));
