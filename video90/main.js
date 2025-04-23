const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
const blog=require('./routes/blog')

// app.use(express.static("public"))  // Built-in Middleware

app.use('/blog',blog)

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log('m1')
    console.log(req.headers)
    req.om="I am Om"
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.om)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})