const http=require("http")
const url="http://api.weatherstack.com/current?access_key=c1c76a4d1c54c17505a50cb32882694d&query=45,-75&units=f"

http.request(url,(response)=>{
    response.on("data",(chunk)=>{
        `let data=""	
    })
    response.on("end",()=>{

    })
})