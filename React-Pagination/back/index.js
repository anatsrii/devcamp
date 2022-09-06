const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3003;
const dbConnect = require('./ConnectToDb');
const mysql = require('mysql');
// require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/attractions', async function (req, res)  {
  const connection = await mysql.createConnection( dbConnect
  //   {
  //   host: "192.168.88.117",
  //   user: "mrjane", 
  //   password: "011866303",
  //   database: "try_nextjs"
  // }
  );
  connection.connect();
 
  await connection.query("SELECT * FROM `attractions`",(err, rows, fields)=> {
      if (err) throw err
      res.status(200).json(rows);
    })

  connection.end();
  // res.status(200).json({Hello: "Mrjane"})
  
})





app.listen(port, ()=> {console.log(`Server running on port ${port}`)});


