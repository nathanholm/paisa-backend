"use strict";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const StockSchema = new Schema({
  ticker: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  currency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency",
    required: true
  },
  exchange: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now()
  },
  belongs_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
});

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;