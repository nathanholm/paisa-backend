"use strict";
require("dotenv").config();
// Database
const db = require("../models");
const log = require("../middleware/log");

// Controllers
const test = (req, res) => {
    res.json({ message: "Endpoint Valid: Transaction Accounts" });
}

const deleteAll = async (req, res) => {
  try {
    const emptyCollection = await db.Currency.deleteMany({});
    res.json(emptyCollection);
  } catch (error) {
    console.log(error)
  }
}

const getCurrencies = async (req, res) => {
  const currencies = await db.Currency.find();
  
  console.log(currencies);
  res.json(currencies);
}

module.exports = {test, getCurrencies, deleteAll}