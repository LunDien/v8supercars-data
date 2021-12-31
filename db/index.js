const mongoose = require('mongoose')


async function connect() {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:lundien3003@cluster0.uw8aj.mongodb.net/v8supercars?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
                .then(connect => console.log("connected to mongodb"))
                .catch(e => console.log("error connecting to mongodb"))
}

module.exports = {connect};