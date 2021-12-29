const express = require('express')
const path = require('path') // It is part of Nodejs
const fs = require('fs') // It is also part of nodejs
let ejs = require('ejs');

const router = express.Router()

const mytodos = []

router.get('/', (req, res)=>{
    const templateLocation = path.join(__dirname, '..','views', 'index.ejs')
    const template =  fs.readFileSync(templateLocation).toString()
    // let html = ejs.render('<h1> <%= people.join(", "); %> </h1>', {people: people});
    let renderedHtml = ejs.render(template, {mytodos: mytodos});
    return res.send(renderedHtml)
})


/**
 * This handler will be used to create new todo
 */
router.post('/api/todo', (req, res)=>{

    const newtask =  { task: req.body.task, isCompleted: false}
    mytodos.push(newtask)
    
    res.json(newtask)
})


router.get('/api/todo/list', (req, res)=>{
    return res.json(mytodos)
})





router.put('/api/toggleCompleted/:index', (req, res)=>{
    const index = req.params.index
    mytodos[index].isCompleted = !mytodos[index].isCompleted
    res.status(200).end()
})

router.delete('/api/toggleCompleted/:index', (req, res)=>{
    const index = req.params.index
    mytodos.pop(index)
    res.status(200).end()
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


module.exports = router