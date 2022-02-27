const todo=require('../confiq/mongoose')

module.exports.create=(req,res)=>{
    console.log('hello') 
    console.log(req.body);
     todo.create({
         description:req.body.description,
         category:req.body.category,
         dueDate:req.body.dueDate
     },(error,data)=>{
         if(error){
             console.log("error in saving to database",error)
         }
         console.log("successfully saved todo")
         res.redirect('back')
     })
}