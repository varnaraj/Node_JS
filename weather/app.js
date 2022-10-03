
const geocode=require("./utils/geocode.js")
const forecast=require("./utils/forecast.js")

if(process.argv.length<=2){
    console.log("Please provide address")
    return 
}
geocode(process.argv[2],(error,data)=>{
    if(error){
        return console.log(error)
    }else{
        if(error!==undefined){
        console.log("error: "+error);
        }
       

        forecast(data.longtitude, data.lattitude, (error, forecastdata) => {
            if(error!==undefined){
                console.log("error: "+error);
                }
            console.log('temperatute in '+ process.argv[2]+"="+forecastdata)
        })

    }
    
})

