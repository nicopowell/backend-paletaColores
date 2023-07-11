import { validationResult } from "express-validator";
import Color from "../models/color"

export const crearColor = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errores: errors.array(),
            });
        }
        const nuevoColor = new Color(req.body);
        await nuevoColor.save();
        res.status(201).json({
            mensaje: "El color fue creado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar crear un color",
        });
    }
};

export const obtenerColores = async (req, res) => {
    try {
        const colores = await Color.find();
        res.status(200).json(colores);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener los colores",
        });
    }
};