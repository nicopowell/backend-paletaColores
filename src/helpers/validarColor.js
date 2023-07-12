import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarColor = [
    check("nombreColor")
        .optional()
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
        .optional()
        .isLength({ max: 20 })
        .withMessage("El codigo HEX debe contener como maximo 20 caracteres")
        .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
        .withMessage("El codigo HEX debe ser valido"),
    check("codigoRGB")
        .optional()
        .isLength({ max: 20 })
        .withMessage("El Codigo RGB debe contener como maximo 20 caracteres")
        .matches(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/)
        .withMessage("El codigo RGB debe debe ser valido"),
    check("nombreColor").custom((value, { req }) => {
        if (!value && !req.body.codigoHEX && !req.body.codigoRGB) {
            throw new Error("Al menos uno de los campos debe ser válido");
        }
        return true;
    }),

    (req, res, next) => {
        resultadoValidacion(req, res, next);
    },
];

export default validarColor;
