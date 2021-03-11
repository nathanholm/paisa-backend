"use strict";
const mongoose = require('mongoose');
// Schema class from mongoose
const { Schema } = mongoose;

// Model
const StockSchema = new Schema({
    ticker: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date_added: {
    type: Date,
    default: Date.now()
    },
    price: Number,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
  }
});

StockSchema.index({ ticker: 1, userId: 1 }, { unique: true })

// Model
const Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;