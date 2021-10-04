
const express = require ("express")

const app = express();

app.set ("view engine","hbs")




app.get("/",(req,res)=>{

    res.render("html",{
        dynamic:"Dynamic is my name"
        
    })
})




app.get ("/portfolio" , (req,res)=>{
    // console.log(req.query.lang)
    res.render("html",{
        name:req.query.name
        
        
     
    })
})


app.listen(5000,()=>{
    console.log("port 5000")
})