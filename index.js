import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import	'./src/database/dbConnection'
import coloresRouter from "./src/routes/colores.routes"

dotenv.config();

dotenv.config();

const app = express();
app.set("PORT", process.env.PORT || 4000);

app.listen(app.get("PORT"), () => {
  console.log("Estoy en el puerto " + app.get("PORT"));
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'))

console.log(path.join(__dirname, "/public"));
app.use(express.static(path.join(__dirname, "/public")))

app.use("/colores", coloresRouter)