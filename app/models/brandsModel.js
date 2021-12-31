const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema

const BRANDS = new Schema ({
    brand: {type : String, required: true},
    imageURL: {type : Array, required: true},
    logoURL: {type : String, required: true},
    bigLogoURL: {type : String, required: true},
    description: {type : String, required: true},
    career: {type : String, required: true},
    address: {type : String, required: true}
},
{
    timestamps: true,
},
)

BRANDS.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});


module.exports = mongoose.model('brands', BRANDS)