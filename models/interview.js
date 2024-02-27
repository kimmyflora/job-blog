const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const tipSchema = new Schema({
    content:{
        type: String,
        required: true
    
    },
    user: {
        type: Schema.Types.ObjectId, // this is from mongoose
        ref: 'User' // this references this line mongoose.model('User', userSchema);
      },
      userName: String,
      userAvatar: String
})





const interviewSchema = new Schema({
    position: String,
    pay: String,
    location: Date,
    tips: [tipSchema]

})



module.exports = mongoose.model('Interview', interviewSchema);