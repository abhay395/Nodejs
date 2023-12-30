const mongoose = require('mongoose')
const {Schema} = mongoose;

const taskShcema  = new Schema({
    title:String,
    status:Boolean,
    date:{type:Date,default:Date.now()}
})

exports.Task = mongoose.model('Tsak',taskShcema)