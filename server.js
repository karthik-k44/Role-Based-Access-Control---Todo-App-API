import connectDB from "./config/db.js";
import express from "express"
import authRoutes from "./routes/authRouters.js"
import todoRoutes from "./routes/todoRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
const app= express()

app.use(express.json())

connectDB()

app.use('/auth',authRoutes)
app.use('/todo',todoRoutes)
app.use('/admin',adminRoutes)

app.listen(5000, ()=>{
    console.log( "Server running on port 5000")
})