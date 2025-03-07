import express from "express"
import authMiddleware from "../middlewares/authMiddlewares.js"
import { createTask, deleteTask, getTask, updateTask } from "../controllers/todoContollers.js"

const router= express.Router()

router.post("/", authMiddleware, createTask)
router.get("/", authMiddleware, getTask)
router.put("/:id", authMiddleware,updateTask)
router.delete("/:id", authMiddleware,deleteTask)

export default router