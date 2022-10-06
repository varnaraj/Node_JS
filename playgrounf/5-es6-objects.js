//object property shorthand

const name="varnaraj"
const userAge=24
const user={
    name,
    age:userAge,
    location:"srilanka"
}

console.log(user)

//object destructuring
const product1={
    label:"red note book",
    price:3,
    stock:201,
    salePrice:undefined
}

// const label1=product1.label
// const price1=product1.price
// const stock1=product1.stock
// console.log(product1)

const {label,price,stock}=product1
console.log(label)
console.log(stock)

