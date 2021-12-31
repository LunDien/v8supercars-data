const mongoose = require('mongoose')


async function connect() {
    try {
        mongoose.connect(
            process.env.MONGODB_URI || 'mongodb+srv://admin:lundien3003@cluster0.uw8aj.mongodb.net/v8supercars?retryWrites=true&w=majority',
            {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useCreateIndex: true,
              useFindAndModify: false,
            },
          );
        console.log('connect successfully')
    } catch (error) {
        console.log('connect failure')
    }
}

module.exports = {connect};