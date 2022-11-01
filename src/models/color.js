import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
    codigo:{
        type: String,
        required: true,
        unique: true
    },
    color:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 30,
    },
    colorHexa:{
        type: String,
        required: true,
        unique: true,
    }
})

const Color = mongoose.model("color", colorSchema)

export default Color;