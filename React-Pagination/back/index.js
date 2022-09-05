const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3003;
const DB = require('./ConnectToDb');
const mysql = require('mysql');
// require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/attractions', function (req, res)  {
  const connection = mysql.createConnection({DB});
  console.log(DB);
  connection.connect(function(err){
    if (err) throw err;
    connection.query("SELECT * FROM attractions", function(err, results, fields) {
      if (err) throw err;
      res.status(200).json(results);
    })
  })
})





app.listen(port, ()=> {console.log(`Server running on port ${port}`)});


