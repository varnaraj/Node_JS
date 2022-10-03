const request=require('request');

const url="http://api.weatherstack.com/current?access_key=c1c76a4d1c54c17505a50cb32882694d&query=&units=f";

// request({url:url,json:true},(error,response)=>{
//     if(error){
//         console.log("unable to connect weather services")
//     }else if(response.body.error){
        
//         console.log(response.body.error.info)
//     }else{
//         console.log("It is currently "+response.body.current.temperature+" farahnit out. It feels like "+response.body.current.feelslike+" faranit out.");
//     }
    
//    // console.log("It is currently "+response.body.current.temperature+" farahnit out. It feels like "+response.body.current.feelslike+" faranit out.");
//    // console.log(response.body.current.weather_descriptions[0])
// })

//geocoding
const urll="https://api.mapbox.com/geocoding/v5/mapbox.places/"+"12whaxt"+".json?access_token=pk.eyJ1IjoidmFybmFyYWoiLCJhIjoiY2w4c2FwMHJrMGZkZTN3cWo4cDF6ZWo1ayJ9.JA-_n3C7ifsCOL69DoeOdA&limit=1";
const url2="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFybmFyYWoiLCJhIjoiY2w4c2FwMHJrMGZkZTN3cWo4cDF6ZWo1ayJ9.JA-_n3C7ifsCOL69DoeOdA&limit=1"
request({url:urll,json:true},(error,response)=>{
    if(error){
        console.log("unable to connect");
    }else if(response.body.features.length===0){
        console.log("unable to find location , Try an other search")
    }else{
        const lattitude=response.body.features[0].center[1]
        const longtitude=response.body.features[0].center[0]
        console.log(lattitude,longtitude)
    }
    
})