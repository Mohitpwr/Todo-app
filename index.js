//require express
const express=require('express')

const app=express();
// using middleware for incoming request
app.use(express.urlencoded({extended:true}));
//accessing our static files 
app.use(express.static('./assets'))
//aquire router
app.use('/',require('./routes'))
//set up our ejs view engine
app.set('view engine','ejs')
app.set('views','./views')


app.listen(3000,(error)=>{
  if(error){
      console.log("error in running server")
  }  
  console.log("server is running on port:3000",)
})


