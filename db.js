const mongoose = require('mongoose');
mongoose.Promise = global.Promise
let isConnected

module.exports = async = () => {

    console.log("Is Connected: ", isConnected)
    if (isConnected) return Promise.resolve()

    return mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(db => {
            isConnected = db.connections[0].readyState
            //console.log(db.connections[0])
        })

}