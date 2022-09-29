const fs = require("fs");
// const book={
//     title: "Ego is my enemy",
//     author:"varnaraj"
// }

// const bookJSON= JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);
// const parsedData=JSON.parse(bookJSON)
// console.log(parsedData.title);

const dataBuffer=fs.readFileSync('1-json.json');
const dataJSON=dataBuffer.toString();
const data=JSON.parse(dataJSON);
console.log(data.title);