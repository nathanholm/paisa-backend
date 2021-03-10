require("dotenv").config();
// Database
const db = require("../models");
const log = require("../middleware/log");

// Controllers
const test = (req, res) => {
    res.json({ message: "Endpoint Valid: Transaction Accounts" });
}

const create = async ( req, res ) => {
  try {
    // Destructure submitted form data
    const { institutionName, nickname, accountType, accountNumber } = req.body;
    
    // Create a new Transaction Account document
    const newTransactionAccount = await new db.TransactionAccount({
      institution_name: institutionName,
      nickname: nickname,
      account_type: accountType,
      account_number: accountNumber,
      belongs_to: req.user._id
    });
    try {
      // Attempt to save Transaction Account to database
      await newTransactionAccount.save();
      
      // Log success
      const message = {
        name:`${accountType} Account`,
        message: `created for ${req.user.name}`,
        where: "Transaction Account Database"
      }
      log.success({...message});
      
      res.json(newTransactionAccount);
    } catch (error) {
      // Map the name and message values for each Mongoose error.
      const errorList = log.mongooseErrors(error.errors, "Transaction Account Database");
      res.status(400).json(errorList);
    }
  } catch (error) {
    const {name, message} = error;
    log.error({name, message, where: "Transaction Account Database"});
    res.status(400).json([ { name, message } ]);
  }
}

module.exports = {
  test,
  create
}