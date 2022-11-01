import { Router } from "express";
import { borrarColor, crearColor, editarColor, listaColor, obtenerColor } from "../controllers/color.controllers";

const rutas = Router();

rutas.route("/color")
.get(listaColor)
.post(crearColor)

rutas.route("/color/:id")
.get(obtenerColor)
.put(editarColor)
.delete(borrarColor)

export default rutas;