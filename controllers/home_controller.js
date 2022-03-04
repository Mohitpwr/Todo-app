const Todo=require('../confiq/mongoose')
//  colors for different categories
let colors = {
    Personal : 'gold',
    Work : 'green',
    School : 'aqua',
    Cleaning : 'violet',
    Other : 'darkcyan',
    'n/a' : 'grey',
}
module.exports.home=(req,res)=>{
   Todo.find({}, function(err, Todo){
      if(err){
          console.log("error in fetching contacts from db");
          return;
      }
      
      
      return res.render('home',{
         
          Todo:Todo,
          colorList:colors
      });
    
  });
   
 }