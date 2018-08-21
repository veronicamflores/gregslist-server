let express = require('express')
let server = express()
let bp = require('body-parser')
let port = 3000
let cors = requires(cors())

require('./server-assets/bp/index')

server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

let carRoutes = require('./server-assets/routes/car-routes')


server.use('api/pizza', carRoutes)

server.listen(port, ()=>{
    console.log('Running on Port:', port)
})