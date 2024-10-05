require('dotenv').config() 
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello twitter!')
})

app.get('/facebook', (req, res) => {
    res.send('Hello facebook!')
})

app.get("/login",(req,res)=>{
    res.send("<h1>hello users! please login </h1>")
})

app.get("/harshblog",(req,res)=>{
    res.send("<h2>welcome to my page</h2>")
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})

