require('dotenv').config()
const express = require('express')
const http = require('http')

const app = express()
const connectToDatabase = require('./db')
const Note = require('./Note')

app.get('/', async (req, res) => {
    console.log("REQUEST to / DONE")
    res.sendStatus(200)
    // await connectToDatabase()

    // var note1 = new Note({ title: "t1", description: "d1" });

    // await note1.save();


    // const notes = await Note.find({}, (err, data) => {
    //     if (err)
    //         console.log("ERR: ", err);
    //     console.log("DATA: ")
    // });
    // const notes = await Note.find();

    // res.send({ v: 1, notes, now: new Date() })
})

//Test
http.createServer(app).listen(process.env.PORT || 8000, () => {
    //console.log(process.env.DB)
    console.log("APP IS listening...");
})
