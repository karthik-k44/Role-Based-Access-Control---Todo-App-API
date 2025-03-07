import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    title:{type:String, required: true},
    description:{type:String, required:true},
    completed:{type: Boolean, default:false},
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
})

const Todo = mongoose.model("usertodo", todoSchema )

export default Todo