const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    let siteName = "Adidas"
    let searchText = "Search Now"
    // res.sendFile("templates/index.html", { root: __dirname })
    // res.render("templates/index.html", {siteName: siteName, searchText: searchText})
    let arr=["Hey", 54, 65]
    res.render("index", {siteName: siteName, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    //   res.send('Hello World!')
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    // res.sendFile("templates/blogpost.html", { root: __dirname })
    // res.render("templates/blogpost.html", {blogTitle: blogTitle, blogContent: blogContent})
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})