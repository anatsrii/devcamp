import mysql from "mysql2/promise";

export default async function getAttractionsById(req, res) {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  });
  try {
  const { id } = req.query; // {id}ตั้งตามชื่อไฟล์ในวงเล็บเหลี่ยม
  const sqlCommand = "SELECT * FROM `attractions` WHERE `id` = ?";
  const [data] = await dbconnection.query(sqlCommand, [id])
        console.log(data)
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ err: err.message });
    }
    
}
