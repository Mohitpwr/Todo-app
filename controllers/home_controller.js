const Todo=require('../confiq/mongoose')

module.exports.home=(req,res)=>{
   Todo.find({}, function(err, Todo){
      if(err){
          console.log("error in fetching contacts from db");
          return;
      }
      console.log(Todo)
      return res.render('home',{
         
          Todo:Todo
      });

  })
   
 }