import Color from "../models/color";

export const listaColor = async (req, res) => {
  try {
    const listaColores = await Color.find();
    res.status(200).json(listaColores);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al encontrar una tarea",
    });
  }
};

export const crearColor = async (req, res) => {
  try {
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({
      message: "El color fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "El color no puedo ser creado",
    });
  }
};

export const obtenerColor = async (req, res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);
    res.status(200).json(colorBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "El color no fue encontrado",
    });
  }
};

export const editarColor = async (req, res) => {
  try {
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "El color fue editado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "El color no pudo ser editado",
    });
  }
};

export const borrarColor = async (req, res) => {
  try {
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "El color fue borrado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "El color no fue borrado",
    });
  }
};
