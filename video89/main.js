// Before Routes Part-
// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static("public"))

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// app.get('/', (req, res) => {
//   console.log("Hey its a get request!")
//   res.send('Hey this is a get request')
// })

// app.post('/', (req, res) => {
//   console.log('Hey its a post request!')
//   res.send('Hey this is a post request')
// })

// app.put('/', (req, res) => {
//   console.log('Hey its a put request!')
//   res.send('Hey this is a put request')
// })

// // Below written is also known as chaining of requests in express.js:
// // app.get('/', (req, res) => {
// //   console.log("Hey its a get request")
// //   res.send('Hello World21!')
// // }).post('/', (req, res) => {
// //   console.log("Hey its a post request")
// //   res.send('Hello World post!')
// // }).put('/', (req, res) => {
// //   console.log('Hey its a put request!')
// //   res.send('Hey this is a put request')
// // })

// app.get('/index', (req, res) => {
//   console.log('Hey its index!')
//   // res.send('Hello World index')
//   res.sendFile('templates/index.html',{root:__dirname})
// })

// app.get('/api', (req, res) => {
//   res.json({a:1, b:2, c:3, d:4, name:["Om","Soham"]})
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// From Routes Part-
const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World21!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})