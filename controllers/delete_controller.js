const todo=require('../confiq/mongoose')

module.exports.delete=(req,res)=>{
    // If user haven't selected any task to delete
    console.log("AFTER DELETE BUTTON CLICK" ,req.body)
    if(req.body.id == undefined){
        console.log("User haven't selected any task to delete");
        return res.redirect('back');
    }
    // If only one task is to be deleted
          else if(typeof(req.body.id)=='string'){
              todo.findByIdAndDelete(req.body.id,(error)=>{
                      if(error){
                          console.log("error in todo deletion");
                          return
                      }
     
                     console.log("todo task deletion successfull");
                     res.redirect('back');
            })
        }
        //if multiple task are to be deleted
        else{
            for(let i of req.body.id){
                todo.findByIdAndDelete(i, function(err){
                    if(err){
                        console.log("error deleting tasks ");
                        return;
                    }
                });
            }
            console.log('Todo tasks are deleted successfuly')
            return res.redirect('back');
        }

    }