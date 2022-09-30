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


const chalk=require("chalk")
const fs=require("fs");

const getNotes=()=>{
    return "Your notes";
}

const addNotes=(title,body)=>{
    const notes = loadNotes();
    const duplicateNotes= notes.filter((note)=>note.title===title)
    //console.log(duplicateNotes);
    if(duplicateNotes.length==0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"));
    }else{
        console.log(chalk.red.inverse("Title already taken"));
    }
    
    
}


const removeNotes=(title)=>{
    const notes=loadNotes();
    const notestoKeep= notes.filter((note)=>{
        return note.title!==title;
    })

    if(notes.length>notestoKeep.length){
        console.log(chalk.green.inverse("Note removed"))
        saveNotes(notestoKeep);
    }else{
        console.log(chalk.red.inverse("No notes found"))
    }
    
    // for(let i=0;i<notes.length;i++){
    //     console.log(notes[i].title);
    //     if(notes[i].title===title){
            
    //         const dataJSON2=JSON.stringify(notes);
    //         fs.writeFileSync("notes.json",dataJSON2)
    //         //console.log(notes[i]);
    //         break;
    //     }
    // }
    
    

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
    addNotes:addNotes,
    removeNotes:removeNotes
}