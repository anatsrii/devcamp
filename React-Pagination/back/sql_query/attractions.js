const mysql = require('mysql');
const db = require('../ConnectToDb');

const getAllAttractions = async (req, res) => {
  // const connection = await mysql.createConnection(db);
  // connection.connect();
  res.status(200).json({message: "Hello Express Router"});
}

module.exports = {getAllAttractions};