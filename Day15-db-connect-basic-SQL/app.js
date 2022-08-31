const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const db = require("./Config/toDB")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get("/user", async (req, res) => {
  const connection = mysql.createConnection(db);
  await connection.connect();
   try {
    connection.query('SELECT * FROM `user`', (err, rows, fields) => {
      if (err) {
        console.log("Error while query all from database", err);
        return res.status(400).send();
      }
      return res.status(200).json(rows);
    })
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
  connection.end();
});

app.post("/create-user", async (req, res) => {
  console.log(req.body);
  const { firstname, lastname, age } = req.body;
  const connection = mysql.createConnection(db);
  connection.connect();
  try {
    connection.query(
      `INSERT INTO user (firstname, lastname, age) VALUES (?, ?, ?)`,
      [firstname, lastname, age],
      (err, results) => {
        if (err) throw err;
        res.status(201);
        res.json(results);
      }
      );
    } 
    catch (err) {
      console.log(err);
      res.status(500).send();
    }  
    connection.end();
});

app.put("/edit-user", async (req, res) => {
  let id = req.params.id;
  let { firstname, lastname, age } = req.body;
  const connection = mysql.createConnection(db);
  connection.connect();
  try {
    connection.query(
      `UPDATE user
                    SET firstname = ?, lastname = ?, age = ?
                    WHERE id = ?`,
      [firstname, lastname, age, id],
      (err, results, fields) => {
        if (err) {
          console.log("Error while updating user", err);
          return res.status(400).send();
        }
        return res
          .status(201)
          .json(results, { message: "has been update successfull" });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
  connection.end();
});

app.delete("/delete-user/:id", async (req, res) => {
  let id = req.params.id;
  const connection = mysql.createConnection(db);
  connection.connect();
  try {
    connection.query(
      `DELETE FROM user WHERE user.id = ?`, [id],
      (err, results, fields) => {
        if (err) {
          console.log("CANNOT DELETE. No user in database");
          return res.status(400).send();
        } else {
          return res.status(200).json({message: "Delete user successfull!"})
        }
      }
    );
  }
  catch (err) {
    console.log(err);
    res.status(500).send();
  }
  connection.end();
});

app.listen(port, () => console.log(`Server start on port ${port}`));
