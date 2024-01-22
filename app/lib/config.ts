export const __dev = process.env.NODE_ENV === 'development'



export function errorMessage (message: any) {
    const payload = {
        success: false,
        data: null,
        message
    }
    if (__dev) console.log(payload)
    return payload
}