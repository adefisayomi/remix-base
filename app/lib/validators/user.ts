import Joi from "joi";
import { errorMessage } from "../config";

export async function emailAndPassword (payload: any) {
    try {
        const data = Joi.object({

            email: Joi.string()
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'co'] } })
                    .required(),
            password: Joi.string()
                    .required()
                    .min(6),
        })
        const {value, error} = data.validate(payload)
        if (error) throw new Error(error.message.replaceAll(/["]/g, ''))

        return ({
            success: true,
            message: 'payload valid',
            data: value
        })
    }
    catch(err: any) {
        return errorMessage(err.message)
    }
}