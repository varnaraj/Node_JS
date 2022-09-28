// // // // const sum = require('./utils.js')
// // // // // const name ='varnaraj';
// // // // console.log(sum(3,5));

// // // const validator=require("validator");
// // // // const fs=require("fs");
// // // // const notes=require("./utils.js");
// // // // fs.writeFileSync("notes.js",notes());
// // // console.log(validator.isEmail('varnaa.gmail.com'));
// // // console.log(validator.isURL('https:/hii.io'));

// // // Importing module
//  import chalk from 'chalk';

// // // Printing the text
//  console.log(chalk.red("aayush"))
//  console.log(chalk.blue.bold.dim.inverse(process.argv[2]))

// console.log(process.argv2);
// // //console.log(red.underline.bold("GFG"))

console.log(process.argv[3]);
import chalk from "chalk";
//const getNotes=require("./notes.js");
const command=process.argv[2]
if(command==='add'){
    console.log("adding note");
}else if(command==='remove'){
    console.log("removing note");
}

