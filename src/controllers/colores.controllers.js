import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
    nombreColor:{
        type: String,
        maxLenght: 20
    },
    codigoHEX:{
        type: String,
        maxLenght: 20
    },
    codigoRGB:{
        type: String,
        maxLenght: 20
    }
})

const Color = mongoose.model("color", colorSchema)

export default Tarea