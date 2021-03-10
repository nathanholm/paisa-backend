// Imports
require('dotenv').config();
const Transaction = require('../models/Transaction');


const getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();


    }
//Exports
module.exports = {
        getTransactions,
        addTransaction,
        deleteTransaction,
    }

    //not working