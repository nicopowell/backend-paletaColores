import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTarea = [
    check("nombreColor")
        .notEmpty()
        .withMessage("El nombre de la tarea es un dato obligatorio")
        .isLength({ max: 20 })
        .withMessage("El nombre del color debe contener como maximo 20 caracteres")
        .custom((value) => {
            if (CSS.supports("color", value.toLowerCase())) {
                return true;
            } else {
                throw new Error("El nombre del color debe ser un nombre valido");
            }
        }),
    check("codigoHEX")
        .notEmpty()
        .withMessage("El nombre de la tarea es un dato obligatorio")
        .isLength({ max: 20 })
        .withMessage("El codigo HEX debe contener como maximo 20 caracteres")
        .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
        .withMessage("El codigo HEX debe ser valido"),
    check("codigoRGB")
        .notEmpty()
        .withMessage("El nombre de la tarea es un dato obligatorio")
        .isLength({ max: 20 })
        .withMessage("El Codigo RGB debe contener como maximo 20 caracteres")
        .matches(/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/)
        .withMessage("El codigo RGB debe debe ser valido"),
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    },
];

export default validarTarea;