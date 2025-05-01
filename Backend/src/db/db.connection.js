import mongoose from 'mongoose'
import { DB_Name } from '../constant.js'

const dbConnection = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log("database connected successfully!")
    } catch (error) {
        console.log("database connection faild!...", error)
    }
}

export {dbConnection}