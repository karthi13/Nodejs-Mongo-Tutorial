const mongoose = require('mongoose');

let Todo = mongoose.model('Todo',{
    text : {
        type : String,
        required : true,
        trim : true,
        minLength : 1
    },
    completed :{
        type : Boolean,
        default : false
    },
    completedAt :{
        type : Number,
        default : 0
    }
});

module.exports = { Todo };
