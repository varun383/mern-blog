import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB=async()=>{
    try{
     const conn=await mongoose.connect(process.env.MONGO_URI) //it returns a promise
     console.log(`MONGODB CONNECTED ${conn.connection.host}`);
    }catch(error){
        console.log(`Error:${error.message}`);
        process.exit(1)
    }
}

export default connectDB;