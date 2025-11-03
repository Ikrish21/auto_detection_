import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()


export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Databse connected succesfully")
    }catch(err){
        return console.log("Database connection error:",err.message);
    }
}