import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  });

  try {
    const sqlCommand = "SELECT * from `attractions`";
    const values = [];
    const [data] = await dbconnection.execute(sqlCommand, values);
    dbconnection.end();
    res.status(200).json({results: data});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
