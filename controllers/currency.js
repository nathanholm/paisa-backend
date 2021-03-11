"use strict";
require("dotenv").config();
// Database
const db = require("../models");
const log = require("../middleware/log");

// Controllers
const test = (req, res) => {
    res.json({ message: "Endpoint Valid: Currencies" });
}

const deleteAll = async (req, res) => {
  try {
    const emptyCollection = await db.Currency.deleteMany({});
    res.json(emptyCollection);
  } catch (error) {
    console.log(error)
  }
}

const getAll = async (req, res) => {
  const currencies = await db.Currency.find();
  res.json(currencies);
}

module.exports = {test, getAll, deleteAll}