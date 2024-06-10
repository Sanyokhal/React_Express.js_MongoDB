const mongoose = require('mongoose');

const OperationSchema = mongoose.Schema({
    owner_id: {
        required: true,
        type: Number
    },
    type: {
        required: true,
        type: String,
        enum: ['expense', 'income']
    },
    delta: {
        required: true,
        type: Number
    },
    currency: {
        required: true,
        type: String,
        enum: ['uah', 'usd', 'eur']
    },
    title: {
        type: String,
        required: true,
        minLength: 4
    },
    category: {
        required: true,
        type: String,
        enum: ['food', 'car', 'transport', 'cloth', 'rent', 'tax', 'work', 'friend']
    },
    date: {
        required: true,
        type: String
    }
})

const Operation = mongoose.model("Operation", OperationSchema);
module.exports = Operation;