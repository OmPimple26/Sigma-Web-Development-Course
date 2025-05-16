// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee");

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs')

const getRandom=(arr)=>{
    let rno=Math.floor(Math.random()*(arr.length-1))
    return arr[rno]
}

app.get('/', (req, res) => {
    //  res.send('Hello World!')
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    //Clear the collection Employee
    await Employee.deleteMany({})

    //  Generate random data
    let randomNames=["Om", "Anushka", "Soham", "Prerna"]
    let randomLang=["Python","JS","C++","Java"]
    let randomCities=["Chiplun", "Pune", "Mumbai", "Pen"]

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            // name: "Harry",
            // salary: 45000000,
            // language: "Python",
            // city: "New York",
            // isManager: true

            name: getRandom(randomNames),
            salary: Math.floor(Math.random()*22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })

        // await e.save()
        console.log(e)
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})