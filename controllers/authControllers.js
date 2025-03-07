import bcrypt from "bcrypt"
import generateToken from "../utils/tokenUtils.js"
import User from "../models/userModel.js"


export const Signup= async (req, res)=>{
    const {name, email, password, role}= req.body
    const hashedPassword= await bcrypt.hash(password,10)
    try{
         
        const existUser= await User.findOne({email})
        if(existUser)
        {
            return res.status(401).json("User already exists")
        }
        const user= new User({name, email, password: hashedPassword, role: role||"User"})
        await user.save()
        res.status(201).json({ message: "User registered successfully" });

    }
    catch(error)
    {
        res.status(500).json({ error: error.message });
    }
}

export const Login= async(req, res)=>{
    const {email, password}= req.body
    try{
        const user= await User.findOne({email})
        if(!user) return res.status(401).json("No User Found")
        const isMatch= await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(401).json("Invalid credentials")
        
        const token = generateToken(user)
        res.status(200).json({ 
            message: "Login successful", 
            token, 
            user: { id: user._id, name: user.name, email: user.email, role: user.role } 
        });
    }
    catch(error)
    {
        res.status(500).json({ error: error.message });

    }
}

