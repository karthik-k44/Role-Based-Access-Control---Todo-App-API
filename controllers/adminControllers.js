import Todo from "../models/todoModel.js"

export const getData=async(req,res)=>{
    try{
        const todos= await Todo.find()
        res.json(todos)
    }
    catch(error)
    {
        res.status(404).json(error)
    }
}