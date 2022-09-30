// const square=function(x){
//     return x*x;
// }
// const square=(x)=>{
//     return x*x;
// }
// const square=(x)=> x*x;
// console.log(square(4))

const event={
    name: "birthday",
    guestList:['varnaa','mike','raj'],
    
    printGuestList(){
        console.log("guest list for "+ this.name)
        this.guestList.forEach(function(guest){
            console.log(guest)
        })
    }
    
}
event.printGuestList()