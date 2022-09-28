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

// console.log(process.argv[3]);
// import chalk from "chalk";
// import { argv } from "process";



//const yargs=require ("yargs");


//const getNotes=require("./notes.js");

// if(command==='add'){
//     console.log("adding note");
// }else if(command==='remove'){
//     console.log("removing note");
// }
// console.log(process.argv);
// console.log(yargs(process.argv.slice(2)).argv);
//const {hideBin} = require('yargs/helpers')
//add, remove, read,list
//create add
// yargs(hideBin(process.argv)).command({
//     command:'add',
//     describe:'Add a new note',
//     handler:function(){
//         console.log('Adding new notes')
//     }
// }).parse()
// console.log('yargs.argv')


const yargs = require('yargs')

//adding a note
yargs.command({
    command: "add",
    describe:"Add a new note",
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type:'string'
        },
        body:{
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log("body is:  ",argv.body)
    }

})
//removing a note
yargs.command({
    command: "remove",
    describe:"remove a note",
    
    handler: function(){
        console.log("remove a note")
    }

})

yargs.command({
    command: "list",
    describe:"list note",
    
    handler: function(){
        console.log("Listing all notes")
    }

})

yargs.command({
    command: "read",
    describe:"reading note",
    
    handler: function(){
        console.log("reading a note")
    }

})

yargs.argv;

