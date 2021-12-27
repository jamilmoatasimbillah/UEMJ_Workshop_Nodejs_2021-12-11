const express = require('express')

const app = express()



/**
 * To listen for http request, we need to use the listen() function
 */
app.listen(5000, function(){
    console.log("The server is listening to port ", 5000)
})


// Route handler 
app.get('/watch', function(req, res){
    // req => Instance of Express.Request
    // res => Instance of Express.Response

    res.send("Hello world. You are wathing nothing. It is a SPAM!!!")
})


function homeRouteHandler(req, res){
    res.send("We are at home now.")
}


app.get('/home', homeRouteHandler)


const newArrowFunctionHandler = (req, res) => {
    res.send("The arrow function is working.")
}


app.get('/arrow', newArrowFunctionHandler)


app.get('/name/:provided_name', (req, res) => {
    console.log("It is /name route handler")
    const provided_name = req.params.provided_name
    res.send(`My name is ${provided_name}.`)
})


app.get('/cube/:number', (req, res) => {
    console.log("It is /name route handler")
    const number = req.params.number
    res.send(`Cube of ${number} is equal to ${number * number * number}.`)
})
