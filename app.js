require('dotenv').config()
const express = require('express')
const http = require('http')

const app = express()
const connectToDatabase = require('./db')
const Note = require('./Note')

app.get('/', async (req, res) => {
    await connectToDatabase()

    await Note.insertMany([{ title: "t", description: "d" }], (err, data) => {
        console.log("ERR: ", err);
        console.log("DATA: ", data)
    })

    const notes = await Note.find({}, (err, data) => {
        //console.log("ERR: ", err);
        //console.log("DATA: ", data)
    });


    res.send({ v: 1, notes })
})

//Test
http.createServer(app).listen(process.env.PORT || 8000, () => {
    console.log(process.env.DB)
    console.log("APP IS listening...");
})
