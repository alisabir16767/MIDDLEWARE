const express=require('express');
const app =express();


app.use((req,res,next)=>{
   console.log("Hi,i am 1st middleware");
   next();
})

app.use((req,res,next)=>{
   console.log("Hi,i am 2nd middleware");
   next();
})


app.get('/',(req,res)=>{ 
 res.send("Hi i am root");
});

app.get('/random',(req,res)=>{
   res.send("Hi , I am random page");
})


app.listen(8080,()=>{
   console.log("app is running on port number 8080");
})