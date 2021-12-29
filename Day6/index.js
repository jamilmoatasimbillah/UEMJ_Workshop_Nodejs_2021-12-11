const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const routes = require('./routes')
const loginRoutes = require('./routes/login')

app.use(express.static('public')) // this folder will be used to deliver the static files 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(routes)
app.use(loginRoutes)


/**
 * To listen for http request, we need to use the listen() function
 */
app.listen(5000, function(){
    console.log("The server is listening to port ", 5000)
})
