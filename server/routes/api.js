const express = require('express') //install
const router = express.Router()
const Client = require('../models/Client')
const mongoose = require('mongoose')
const data = require('../../src/data.json')


//post json in DB
    // const uploadData = function(){
    //     for(let c of data){
    //         let client = new Client(c)
    //         client.save()
    //     }
    // }
    
    // uploadData()

router.get('/clients', function (req, res) {
    Client.find({}).exec(function (err, data) {
        res.send(data)
    })
})


router.post('/client', function (req, res) {
    let newClient = new Client(req.body)
    newClient.save()
    res.send("completed adding Transaction")
})


//update
router.put('/client', function (req, res) {
    console.log(req.body)
    let id = req.body.id
    Client.findByIdAndUpdate( id , {[req.body.key]: req.body.value }, function (err, client) {
        console.log(client)
    })
    
    res.end() //end the cycle!

})


//in the end
router.get('/', function (request, response) {
    console.log('Someone has come into the server. Brace yourselves.')
    response.send('Ending the cycle, thanks for visiting')
})

module.exports = router