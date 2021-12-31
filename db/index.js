const mongoose = require('mongoose')


async function connect() {
    try {
        await mongoose.connect('mongodb+srv://admin:lundien3003@cluster0.uw8aj.mongodb.net/v8supercars?retryWrites=true&w=majority');
        console.log('connect successfully')
    } catch (error) {
        console.log('connect failure')
    }
}

module.exports = {connect};