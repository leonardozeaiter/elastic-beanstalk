const mongoose = require('mongoose');
mongoose.Promise = global.Promise
let isConnected

module.exports = async = () => {

    console.log("Is Connected: ", isConnected)
    if (isConnected) return Promise.resolve()

    let conUrl = "mongodb+srv://mflixAppUser:mflixAppPwd@mflix.a5soe.mongodb.net/sample_mflix";

    // return mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
    return mongoose.connect(conUrl, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(db => {
            isConnected = db.connections[0].readyState
            //console.log(db.connections[0])
        })

}