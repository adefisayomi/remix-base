import mongoose, {InferSchemaType} from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
}, {timestamps: true})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export type UserType = {
    success: boolean,
    message: any,
    data: InferSchemaType<typeof userSchema> | any
}

export default User