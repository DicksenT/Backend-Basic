const fs = require('fs')

//function to read file
fs.readFile('./doc1.txt', (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
    
})

//function to write file
fs.writeFile('./doc2.txt', 'hasdasd', ()=>{

})

fs.readFile('./doc1.txt', (err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
    
})
