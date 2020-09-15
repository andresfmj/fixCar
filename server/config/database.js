const mongoose      = require('mongoose');

mongoose.connect(`mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection

db.on('error', (error) => {
    console.error(error, 'connection error')
})

db.once('open', () => {
    console.log('database synced!')
})

module.exports = db
