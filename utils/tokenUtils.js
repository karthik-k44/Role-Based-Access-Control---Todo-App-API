import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (user) => {
    return jwt.sign(
        { userId: user._id, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
    );
};

export default generateToken;
