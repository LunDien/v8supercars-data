const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema

const VIDEOS = new Schema ({
    name: {type : String, required: true},
    brand: {type : String, required: true},
    description: {type : String, required: true},
    videoURL: {type : String, required: true}
},
{
    timestamps: true,
},
)

VIDEOS.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});


module.exports = mongoose.model('videos', VIDEOS)