var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type:String
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);