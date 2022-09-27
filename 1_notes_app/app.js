const fs=require('fs');
fs.writeFileSync("notes.txt","There is a boy");
fs.appendFileSync("notes.txt","\nIt is appended one");