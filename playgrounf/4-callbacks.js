setTimeout(()=>{
    console.log("two seconds are up")
},2000)

const names=["varnaa","jen","jes"]
const shortNames=names.filter((names)=>{
    return names.length<=4;
})

const geocode=(address,callback)=>{
    const data={
        lattitude:0,
        longtitude:0
    }
    return data;
}

console.log(geocode("jaffna",))
