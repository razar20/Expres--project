const express = require('express')
//const req = require('express/lib/request')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("Here")
    //res.send("Hi")
    //res.json({ message: "Error"})
    //res.download("server.js")
    res.render("index", {text: "World"})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000)
