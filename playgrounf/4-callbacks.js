// setTimeout(()=>{
//     console.log("two seconds are up")
// },2000)

// const names=["varnaa","jen","jes"]
// const shortNames=names.filter((names)=>{
//     return names.length<=4;
// })

// const geocode=(address,callback)=>{
//     setTimeout(()=>{
//         const data={
//             lattitude:0,
//             longtitude:0
//         }
//         callback(data)
//     },2000)
// }

// geocode("jaffna",(data)=>{
//     console.log(data);
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add=(a,b,callback)=>{
    setTimeout(()=>{
        const sum=a+b;
        callback(sum);
    },0)

}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})