import { Router } from "express";
import { check } from "express-validator";
import validarColor from "../helpers/validarColor";
import { crearColor, obtenerColores } from "../controllers/colores.controllers";

const router = Router();

router.route("/").get(obtenerColores).post(validarColor ,crearColor)

export default router