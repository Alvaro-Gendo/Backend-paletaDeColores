import { Router } from "express";
import { borrarColor, crearColor, listaColor, obtenerColor } from "../controllers/color.controllers";
import { check } from "express-validator";

const rutas = Router();

rutas.route("/color")
.get(listaColor)
.post([
    check("colorHexa")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:4, max:7})
    .withMessage("El color debe ser ingresado en hexadecimal y debe tener entre 4 y 7 caracteres")
    .matches(/^#[a-zA-Z0-9]{6}|rgb\((?:\s*\d+\s*,){2}\s*[\d]+\)|rgba\((\s*\d+\s*,){3}[\d]+\)|hsl\(\s*\d+\s*(\s*\s*\d+){2}\)|hsla\(\s*\d+(\s*,\s*\d+\s*){2}\s*\s*[\d]+\)$/)
    .withMessage("Ingrese caracteres validos")
],crearColor)

rutas.route("/color/:id")
.get(obtenerColor)
.delete(borrarColor)

export default rutas;