const fs = require('fs')
const readStream = fs.createReadStream('./doc2.txt')
const writeStream = fs.createWriteStream('./doc3.txt')


//function to what should do if chunk of data received
readStream.on('data', (chunk) =>{
    console.log('-------NEW CHUNK-------');
    console.log(chunk.toString());
})
//function to write chunk of data received to writeStream location
readStream.pipe(writeStream)