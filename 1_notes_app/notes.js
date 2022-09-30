// import yargs from "yargs";
   
// // Customize yargs version
// //yargs.version('1.1.0')
   
// // Create add command
// yargs.command({
//     command: 'add',
//     describe: 'Adds two number',
//     builder: {
//         firstNumber: {
//             describe: 'First Number',
//             demandOption: true,  // Required
//             type: 'number'     
//         },
//         secondNumber: {  
//             describe: 'Second Number',
//             demandOption: true,
//             type: 'number'
//         }
//     },
  
//     // Function for your command
//     handler(argv) {
//         console.log("Result:", 
//             (argv.firstNumber+argv.secondNumber))
//     }
// })
   
// yargs.parse() // To set above changes

const fs=require("fs");
const getNotes=function(){
    return "Your notes";
}

const addNotes=function(title,body){
    const notes = loadNotes();
    const duplicateNotes= notes.filter(function(note){
        return note.title==title;

    })
    if(duplicateNotes.length==0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log("New note added");
    }else{
        console.log("Title already taken");
    }
    
    
}


const removeNotes=function(title){
    
}


const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}

const loadNotes= function(){
    try{
        const dataBuffer=fs.readFileSync("notes.json");
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
    
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes
}