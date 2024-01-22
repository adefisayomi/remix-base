import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({}, {timestamps: true, strict: false})

const Session = mongoose.models.sessions || mongoose.model("sessions", sessionSchema)
export default Session