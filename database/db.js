import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const conection = mysql2.createConnection({
  database: process.env.DATABASE,
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  ssl: {
    rejectUnauhorized: false,
  },
});

try {
  conection.connect();
  console.log("conexion exitosa");
} catch (error) {
  console.log({
    msg: "sSucedió un error al conectarse a la Base de Datos",
    falla: error,
  });
}

export default conection;
