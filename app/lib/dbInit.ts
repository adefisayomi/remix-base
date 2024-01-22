import mongoose from 'mongoose'
import { errorMessage } from './config'
import { MONGO_URI } from '~/constants'

const connection = {isConnected: false}

export default async function dbInit () {
    try {
        if (!connection.isConnected) {
            await mongoose.connect(MONGO_URI!)
            connection.isConnected = true
            console.log(`DB connected`)
        }
    }
    catch(err: any) {
        return errorMessage(err.message)
    }
}