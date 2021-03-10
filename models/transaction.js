const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dateMade: {
        type: Date,
        default: Date.now
    }
});




const User = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;