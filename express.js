const express = require('express')
const app = express()

//morgan is a req log middleware, good for debugging and monitoring
const morgan = require('morgan')

// the server ip/domain
app.listen(3000)

app.use(morgan('tiny'))

//we can routing use these function
app.get('/', (req,res) =>{
    //simplified, so dont need setHeader set code etc
    //res.send('<h1>HELLO</h1>')
    
    //we need to use sendfile to respond with file, but we need specify the root since express will check from root
    //specify the directory to our dirname so express know where to search the file
    res.sendFile('./content/testHtml.html', {root: __dirname})


    /* we can redirect use res.redirect
    ex : res.redirect('/home') */
})

//basically respond with this file if user domain didnt match all written above on the app.get
app.use((req,res) =>{
    res.sendFile('./content/404.html', {root: __dirname})
})