const { route } = require(".")

const router = require("express").Router()

/**
 * This route will be responsible for providing the user interface for login
 */
router.get('/login', (req, res) => {
    loginHtml = `
        <html>
            <head>
                <title>Login Page</title>
            </head>
            <body>
                <form method="POST" action="/login/verify"  >
                    <input type="text" name="username">
                    <input type="password" name="password">
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </body>
        </html>
    `
    return res.send(loginHtml)
})

/**
 * This route is to verify the login information and authenticate the user
 */
router.post('/login/verify', (req, res)=>{
    console.log(req.headers)
    console.log(req.body)
    
    return res.send("Login successfull")
})

module.exports = router