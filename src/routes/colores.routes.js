import { Router } from "express";
import { check } from "express-validator";
import validarColor from "../helpers/validarColor";
import { borrarColor, crearColor, editarColor, obtenerColor, obtenerColores } from "../controllers/colores.controllers";

const router = Router();

router.route("/").get(obtenerColores).post(validarColor ,crearColor)
router.route("/:id").get(obtenerColor).delete(borrarColor).put(editarColor)

export default router