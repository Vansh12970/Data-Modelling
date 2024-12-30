import mongoose from "mongoose"

const medicalRecordschema = new mongoose.Schema({}, {timestamps:true})

export const Medicalrecord = mongoose.model("Medicalrecord", medicalRecordschema)