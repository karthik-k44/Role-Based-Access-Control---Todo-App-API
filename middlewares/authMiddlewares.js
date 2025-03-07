import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        const token = authHeader.replace("Bearer ", "").trim(); 
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; 

        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export default authMiddleware;
