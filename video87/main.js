const fs = require("fs")
console.log(fs)

// const fs = require("fs/promises")
// console.log(fs)

// console.log("Starting")
// fs.writeFileSync("om.txt","Om is a good boy")
// console.log("Ending")

console.log("Starting")
fs.writeFile("om2.txt","Om is a good boy2",() => {
    console.log("Done")
    fs.readFile("om2.txt",(error,data) => {
        // console.log(error,data)
        console.log(error,data.toString())
    })
})

fs.appendFile("om.txt"," omrobo", (e,d) => {
    console.log(d)
}) 

console.log("Ending")