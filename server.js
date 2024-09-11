const http = require('http')
const fs = require('fs')

const _ = require('lodash')

//create server and what should do everytime server get acessed
const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type', 'text/html')

    //lodash
    const rNum = _.random(0,20)
    console.log(rNum);
    
    
    //path routing
    let path = './content/'
    switch(req.url){
        case '/':
            path+='testHtml.html'
            res.statusCode = 200
            break
        //redirecting
        case '/home':
            res.statusCode = 301
            res.setHeader('Location', '/')
            res.end()
        default:
            path+='404.html'
            res.statusCode = 404
            break
    }


    //set content to site to path
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            
            res.end()
        }
        else{
            res.end(data)
        }
    })
})

//set server ip/domain
server.listen(3000,'localhost',()=>{
    console.log('success');    
})