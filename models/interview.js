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
    
})





const interviewSchema = new Schema({
    position: String,
    pay: String,
    when: Date,
    advice: String,
    tips: [tipSchema]

})



module.exports = mongoose.model('Interview', interviewSchema);