require('dotenv').config()
const express = require('express')
const http = require('http')

const app = express()
const connectToDatabase = require('./db')
const Note = require('./Note')

app.get('/', async (req, res) => {
    await connectToDatabase()

    await Note.insertOne({ title: "t1", description: "d1" });

    // const notes = await Note.find({}, (err, data) => {
    //     if (err)
    //         console.log("ERR: ", err);
    //     console.log("DATA: ")
    // });
    const notes = await Note.find();

    res.send({ v: 1, notes, now: new Date() })
})

//Test
http.createServer(app).listen(process.env.PORT || 8000, () => {
    //console.log(process.env.DB)
    console.log("APP IS listening...");
})
