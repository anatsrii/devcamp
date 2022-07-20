const mysql = require("mysql2");
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
// require('dotenv').config();
const db = require('./toDB');

const corsOptions = {
  origin: 'http://localhost:3001',
  Credentials: true,
  
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors(corsOptions));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get("/user", (req, res) => {
  const connection = mysql.createConnection(db);
  // const connection = mysql.createConnection({
  //   host: `${process.env.HOST}`,
  //   user: `${process.env.USER}`,
  //   password: `${process.env.PASSWORD}`,
  //   database: `${process.env.DATABASE}`,
  //   port: `${process.env.PORT}`
  // });
  
  // เปิด connection ไปที่ database
  connection.connect();

  connection.query("SELECT * FROM employee", (err, rows, fields) => {
    if (err) throw err;

    // return response กลับไปหา client โดยแปลง record เป็น json array
    res.status(200)
    res.json(rows);

    // ปิด connection
    connection.end();
  });
});

app.post('/create-user', (req, res)=> {
  console.log(req.body);
  const {firstname, lastname, age} = req.body;
  const connection = mysql.createConnection(db);
  async ()=> { 
    connection.connect();
    await connection.query(`INSERT INTO user (firstname, lastname, age) VALUES ('${firstname}', '${lastname}', ${age});`, (err, rows)=> {
      if (err) throw err;
      res.status(201);
      res.json(rows);
      connection.end();
    });
  // let sqlCreate = `INSERT INTO employee (firstname, lastname, age) VALUES (${firstname}, ${lastname}, ${age});`
  }
})

app.put('/edit-user', (req, res)=> {
  let editId = req.id;
  let {firstnameValue, lastnameValue, ageValue} = req.body;
  const connection = mysql.createConnection(db);
  connection.connect();
  connection.query(`UPDATE employee
                    SET firstname = '${firstnameValue}', lastname = '${lastnameValue}', age = '${ageValue}'
                    WHERE id = '${editId}'`);
  res.status(201).send({message: "Edit user successfull"});
  connection.end();
})

app.delete('/delete-user', (req, res)=> {
  let editId = req.params.id;
  const connection = mysql.createConnection(db);
  connection.connect();
  connection.query(`DELETE FROM user WHERE id='${editId}'`);
  res.status(200)
})

app.listen(port, () => console.log(`Server start on port ${port}`));
