let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    description:{type: String, required: true},
    model:{type: String, required: true},
    make:{type: String, required: true},
    year:{type: Number, required: true},
    price:{type:Number, required: true},
    imgUrl:{type: String, required: true}
})

module.exports = mongoose.model('Car', schema)