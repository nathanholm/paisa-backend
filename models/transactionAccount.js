const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionAccountSchema = new Schema({
  institution_name: {
    type: String,
    trim: true,
    required: function () { return !this.nickname }
  },
  nickname: {
    type: String,
    trim: true,
    required: function () { return !this.institution_name }
  },
  account_type: {
    type: String,
    enum: ["checking", "savings", "cash"],
    trim: true,
    required: true
  },
  account_number: {
    type: Number,
    maxLength: 5
  },
  date: {
    type: Date,
    default: Date.now()
  },
  belongs_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

const TransactionAccount = mongoose.model('TransactionAccount', transactionAccountSchema);

module.exports = TransactionAccount;