const express = require("express")
const app = express()
const path = require("path")
const port = 3000

app.set("view engine", "ejs")
app.use(express.static("public"))


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/page2',(req,res)=>{
    res.render('page2')
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})