import Todo from "../models/todoModel.js";

export const createTask= async(req, res)=>{
    const {title, description,completed} = req.body
    try{
        const todo= new Todo({title,description,completed, createdBy:req.user._id})
        await todo.save()
        res.status(201).json("Task added successfully")
    }
    catch(error)
    {
        res.status(404).json("Error in creating todo", error)
    }
}


export const getTask= async(req, res)=>{
    try{
        const todos= await Todo.find({createdBy: req.user._id})
        res.json(todos)
    }
    catch(error)
    {
        res.status(404).json(error)
    }
}


export const updateTask=async(req,res)=>{
    try{
        const todo= await Todo.findOneAndUpdate({_id:req.params.id, createdBy:req.user._id}, req.body, {new:true})
        if(!todo) return res.status(403).json("Not Authorized")
        res.json(todo)
    }
    catch(error)
    {
        res.status(404).json("Can't update value", error)
    }
}

export const deleteTask= async(req,res)=>{
    try{
        const todo= await Todo.findOneAndDelete({_id:req.params.id, createdBy: req.user._id}, {new:true})
        if (!todo) return res.status(403).json({ message: "Not Authorized" });
        res.json({ message: "Todo deleted" });
    }
    catch(error)
    {
        res.status(404).json("Can't delete value", error)
    }
}