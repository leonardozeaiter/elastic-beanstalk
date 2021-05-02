require('dotenv').config()
const express = require('express')
const http = require('http')

const app = express()
const connectToDatabase = require('./db')
const Note = require('./Note')

app.get('/', async (req, res) => {
    console.log("REQUEST to / DONE", process.env.USERNAME)

    await connectToDatabase()

    var note1 = new Note({ title: "t1", description: "d1" });

    await note1.save();

    res.sendStatus(200);
    //res.send({ v: 1, notes, now: new Date() });

    // const notes = await Note.find({}, (err, data) => {
    //     if (err)
    //         console.log("ERR: ", err);
    //     console.log("DATA: ")
    // });
    // const notes = await Note.find();

    // res.send({ v: 1, notes, now: new Date() })
})



//Test
http.createServer(app).listen(process.env.PORT || 80, () => {
    //console.log(process.env.DB)
    console.log("APP IS listening...");
})
