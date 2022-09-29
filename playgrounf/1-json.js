const fs = require("fs");
const { json } = require("stream/consumers");
// const book={
//     title: "Ego is my enemy",
//     author:"varnaraj"
// }

// const bookJSON= JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);
// const parsedData=JSON.parse(bookJSON)
// console.log(parsedData.title);

// const dataBuffer=fs.readFileSync('1-json.json');
// const dataJSON=dataBuffer.toString();
// const data=JSON.parse(dataJSON);
// console.log(data.title);

const databuffer=fs.readFileSync("1-json.json");
const dataJSON=databuffer.toString();
const data=JSON.parse(dataJSON);
data.name="varnaraj";
data.age=24;
console.log(data.name);
const dataJSON1=JSON.stringify(data)
fs.writeFileSync("1-json.json",dataJSON1)


