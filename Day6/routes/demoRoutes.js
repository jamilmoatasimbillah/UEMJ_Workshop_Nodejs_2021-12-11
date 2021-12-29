

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



router.get('/cube/:number', (req, res) => {
    console.log("It is /name route handler")
    const number = req.params.number
    
    res.send(`
        <html>
            <head>
                <title>Cube(${number})</title>
            </head>
            <body>
                <div>
                    <h1>Cube</h1> 
                    of <h1>${number}</h1> 
                    is equal to 
                    <h1>${number * number * number}</h1>.
                </div>
            </body>
        </html>
    `)
})