
 const mongoose=require("mongoose");
  mongoose.connect('mongodb://localhost:27017/TodoList');

  const Todo=mongoose.model('Todo',{
      description:{
          type:String,
          required:true
      },
      category:{
          type:String,
          required:true
      },
      dueDate:{
          type:String,
          required:true
      }
  })

  module.exports=Todo;