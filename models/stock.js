const mongoose = require('mongoose');
// Schema class from mongoose
const Schema = new mongoose.Schema;

// Make a crewSchema
const stockSchema = new Schema({
    id: { type: String, unique: true },
    ticker: String,
    price: Number,
    userId: { type: String, unique: true },
});

// Model
const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;