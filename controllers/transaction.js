"use strict";
require("dotenv").config();
// Database
const db = require("../models");
const log = require("../middleware/log");

// Controllers
const test = (req, res) => {
    res.json({ message: "Endpoint Valid: Transactions" });
}

const deleteAll = async (req, res) => {
  try {
    const emptyCollection = await db.Transaction.deleteMany({});
    res.json(emptyCollection);
  } catch (error) {
    console.log(error)
  }
}

const getAll = async (req, res) => {
  const transactions = await db.Transaction.find();
  
  console.log(transactions);
  res.json(transactions);
}

module.exports = {test, getAll, deleteAll}