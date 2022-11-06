import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  colorHexa: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 7,
  },
});

const Color = mongoose.model("color", colorSchema);

export default Color;
