const mysql = require('mysql');
const db = require('../ConnectToDb');

//--------- ถ้ามันเยอะ เขียนแยกไฟล์ก็ได้ ------------//

// get all attractions
const getAllAttractions = async (req, res) => {
  const connection = await mysql.createConnection(db);
  connection.connect( ()=> console.log("Function getAllAttraction connect to database"));
  
  let sqlCommand = "SELECT * FROM `attractions`";
  await connection.query(sqlCommand, (err, rows) => {
    if (err) {
      throw err;
    }
    res.status(200).json(rows);
    console.log("Query complete")
  })
  connection.end(()=> console.log("Function getAllAttractions disconnect to database"));
  // res.status(200).json({message: "Hello Express Router"});
}

//  get by id attractions
const getIdAttraction = async (req, res) => {
  const id = req.params.id;
  const connection = mysql.createConnection(db);
  connection.connect( ()=> console.log("Function getIdAttraction connect to database"));
  let sqlCommand = "SELECT * FROM `attractions` WHERE `id` = ?";
  await connection.query(sqlCommand, [id], (err, rows) => {
    if (err) throw err;
    res.status(200).json(rows);
    console.log("Query complete");
  });
  connection.end(()=> console.log("Function getIdAttraction disconnect to database"));

};



module.exports = {getAllAttractions, getIdAttraction};