import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    auth: { type: String, require: true },
    description: { type: String, require: true }
},{
    timestamps: true,
    versionKey: false
})

export default model("Task", taskSchema);