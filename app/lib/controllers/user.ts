import { errorMessage } from "../config";
import User from "../schemas/user";
import { emailAndPassword } from "../validators/user";
import bcrypt from 'bcryptjs'



export async function createUser (payload: {email: string, password: string}) {
    try {
        const validatePayload = await emailAndPassword(payload)
        if (!validatePayload.success) throw new Error(validatePayload.message)
        // 
        const {data} = validatePayload
        const userExist = await User.exists({email: data.email})
        if (userExist) throw new Error('user already exist!')
        // 
        const hash = await bcrypt.hash(data.password, 12)
        const user = new User({email: data.email, password: hash})
        await user.save()
        // 
        return ({
            success: true,
            message: '',
            data: {
                email: user.email,
                id: user.id
            }
        })
    }
    catch(err: any) {
        return errorMessage(err.message)
    }
}

export async function getUserWithEmailAndPassword (payload: {email: string, password: string}) {
    try {
        const validatePayload = await emailAndPassword(payload)
        if (!validatePayload.success) throw new Error(validatePayload.message)
        // 
        const {data} = validatePayload
        const user = await User.findOne({email: data.email})
        if (!user) throw new Error('user does not exist!')
        // 
        const passwordMatch = await bcrypt.compare(data.password, user.password)
        if (!passwordMatch) throw new Error('invalid credentials!')
        // 
        return ({
            success: true,
            message: '',
            data: {
                email: user.email,
                id: user.id
            }
        })
    }
    catch(err: any) {
        return errorMessage(err.message)
    }
}