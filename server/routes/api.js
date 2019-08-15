const express = require( 'express' ) //install
const router = express.Router()
const Client = require('../models/Client')
const mongoose = require('mongoose')


// router.get('/transcations', function (req, res) {
//     Transaction.find({}).exec(function (err, data) {
//         res.send(data)
//     })
// })

//     router.post('/transaction', function (req, res) {
//         let newTransaction = new Transaction(req.body)
//         console.log(newTransaction);
        
//         newTransaction.save()
//         res.send("completed adding Transaction")
//     })


//in the end
router.get('/', function (request, response) {
console.log('Someone has come into the server. Brace yourselves.')
response.send('Ending the cycle, thanks for visiting')  
})

module.exports = router