const todo=require('../confiq/mongoose')

module.exports.delete=(req,res)=>{

todo.findByIdAndDelete(req.body.id,(error)=>{
    if(error){
        console.log("error in deleting todo")
    }
    console.log("todo deletion successfull")
    res.redirect('back')
})

}