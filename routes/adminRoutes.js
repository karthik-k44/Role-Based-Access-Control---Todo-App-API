import express from "express";
import authMiddleware from "../middlewares/authMiddlewares.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
import { getData } from "../controllers/adminControllers.js";

const routes= express.Router()

routes.get("/", authMiddleware, adminMiddleware, getData)

export default routes