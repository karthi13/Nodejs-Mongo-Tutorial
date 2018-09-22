const mongoose = require('mongoose');

let User =  mongoose.model('Users',{
    email : {
        type : String,
        trim : true,
        minlength : 1,
        required : true
    },
    createdAt : {
        type : Number,
        default : 0
    }
});

module.exports = { User };