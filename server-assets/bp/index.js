let mongoose = require('mongoose')
const connectionString = 'mongodb://persona:c00lbeans@ds018498.mlab.com:18498/gregslist'
let connection = mongoose.connection


mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err=>{
    console.log("Database Error: ", err)
})

connection.once('open', () =>{
    console.log("Connected to database")
})