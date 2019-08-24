const express = require('express') //install
const app = express()
const api = require( './server/routes/api' )  // check the path
// const path = require('path')
const bodyParser = require('body-parser') //install
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/crmDB", { useNewUrlParser: true })
// mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/crmDB");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(express.static(path.join(__dirname, 'src'))) 
// app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)


const port = process.env.PORT || 4000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
