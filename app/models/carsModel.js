const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema

const CARS = new Schema ({
    name: {type : String, required: true},
    brand: {type : String, required: true},
    series: {type : String, required: true},
    year: {type : Number, required: true},
    type: {type : String, required: true},
    engine: {type : String, required: true},
    weight: {type : String, required: true},
    topSpeed: {type : String, required: true},
    increaseSpeed: {type : String},
    price: {type : Number, required: true},
    discount: {type : Number, required: true},
    quantity: {type : Number, required: true},
    imageURL: {type : Array, required: true},
    description: {type : String, required: true},
    videoID: {type : String, required: true}
},
{
    timestamps: true,
},
)

CARS.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});


module.exports = mongoose.model('cars', CARS)