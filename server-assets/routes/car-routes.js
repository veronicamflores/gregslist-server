const router = require('express').Router()
let Car = require('../models/Car')

router.get('/:id?', (req, res, next)=>{
    if(!req.params.id){
        Car.find({})
        .then(cars =>{
            return res.send(cars)
        })
    }
    Car.findById(req.params.id)
    .then(car =>{
        res.send(car)
    })
})

router.post('/:id', (req, res, next)=>{

    Car.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(newCar =>{
        res.send(newCar)
    })
})

router.delete('/:id', (req, res, next)=>{
    Car.findByIdAndRemove(req.params.id)
    .then(oldDeletedCar =>{
        res.send('DELETED')
    })
})

module.exports = router