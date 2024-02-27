const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    position: String,
    pay: Number,
    location: Date,
    tips: String

})



module.exports = mongoose.model('Interview', interviewSchema);