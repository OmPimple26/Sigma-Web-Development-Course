import fs from "fs/promises"

let a = await fs.readFile("om.txt")

// console.log(a.toString());

// let b = await fs.writeFile("om.txt","\n\n\n\nThis is amazing promise")
// console.log(a.toString(),b)

let b = await fs.appendFile("om.txt","\n\n\n\nThis is amazing promise")
console.log(a.toString(),b)