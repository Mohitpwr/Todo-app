const express=require('express')
const app=express();
app.use(express.urlencoded());
app.use(express.static('./assets'))
app.use('/',require('./routes'))
app.set('view engine','ejs')
app.set('views','./views')

app.listen(3000,(error)=>{
  if(error){
      console.log("error in running server")
  }  
  console.log("server is running on port:3000",)
})


