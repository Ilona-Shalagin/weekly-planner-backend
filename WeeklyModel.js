const mongoose = require('mongoose')
const weeklySchema = new mongoose.Schema({
    title : {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Plan',weeklySchema)