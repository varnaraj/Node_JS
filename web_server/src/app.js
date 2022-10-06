const path=require("path")
const express=require("express")
const { isAbsolute } = require("path")
console.log(__dirname)


const app=express()
const publicDirectoryPath=path.join(__dirname,"..","public")

app.set("view engine","hbs")

app.use(express.static(publicDirectoryPath))
app.get("",(req,res)=>{
    res.render('index',{
        title:"weatherT",
        name:"varnaraj"
    })
})
// app.get("",(req,res)=>{
//     res.send("Hello everyone")
// })


app.get("/about",(req,res)=>{
    res.render('about',{
        name: "mathu"
    })
})

app.get("/help",(req,res)=>{
    res.render("help",{
        its:"Help page"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})