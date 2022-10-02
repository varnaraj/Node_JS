const request=require('request');

const url="http://api.weatherstack.com/current?access_key=c1c76a4d1c54c17505a50cb32882694d&query=9.6615,80.0255";

request({url:url},(error,response)=>{
    data=JSON.parse(response.body);

    console.log(data.location);
})