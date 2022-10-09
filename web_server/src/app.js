
const path=require("path")
const express=require("express")
const hbs=require("hbs")
console.log(__dirname)


const app=express()

//define paths for express config
const publicDirectoryPath=path.join(__dirname,"..","/public")    //or we can use "../public"
const viewsPath=path.join(__dirname,"..","/template/views")
const partialPaths=path.join(__dirname,"../template/partials")



//setup handle bar engine and views location
app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialPaths)




//setup static deirectory for save
app.use(express.static(publicDirectoryPath))


app.get("",(req,res)=>{
    

    res.render('index',{
        title:"weatherT",
        req_name:"piriyaraj",
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
        its:"Help page",
        name:"help page"
    })
})

app.get("/help/*",(req,res)=>{
    res.render(("herror"))
    
})



app.get("*",(req,res)=>{
    // res.send("MY 404 PAGE")
    res.render("error")

})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})