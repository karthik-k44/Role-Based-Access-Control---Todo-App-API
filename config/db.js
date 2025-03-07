import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const dburl = process.env.dburl

const connectDB=async()=>{
    try{
        await mongoose.connect(dburl)
        console.log("Database connected successfully")
    }
    catch(error)
    {
        console.log(error)
    }
}

export default connectDB