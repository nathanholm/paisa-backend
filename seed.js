const db = require('./models');
const axios = require("axios");

const examples = [
  { name: 'Example 1', completed: true}, 
  { body: 'Example 2', completed: false}
];
const oneExample = { name: 'Example 3', completed: true };


const addManyExamples = async () => {
  const savedExamples = await db.Example.insertMany(examples);
  console.log('=======> Saved Examples.');
  console.log(savedExamples);
}

const addOneExample = async () => {
  const savedOneExample = await db.Example.create(oneExample);
  console.log('=======> Saved One Example.');
  console.log(savedOneExample);
}

// run the functions
// addManyExamples();
// addOneExample();

const oneMessage = { content: 'This is the first message' };

const addOneMessage = async () => {
  const savedOneMessage = await new db.Message.create(oneMessage);
  console.log('=======> Saved One Message.');
  console.log(savedOneMessage);
}

// run the function
// addOneMessage();

const currency = { _id: "AAA", symbol: "AAA", symbol_native: "AAA", decimal_digits: 0, rounding: 0 }

const addOneCurrency = async  () => {
  const savedCurency = await new db.Currency(currency)
}

// addOneMessage();


// Currency seed data provided by LocalePlanet
// https://www.localeplanet.com
const getCurrencies = async () => {
  try {
    const currenciesData = await axios.get("https://www.localeplanet.com/api/auto/currencymap.json");
      const currencies = Object.keys(currenciesData.data).map((currency) => {
        const { code, symbol, symbol_native, decimal_digits, rounding } = currenciesData.data[currency];
         
        return { _id: code, symbol, symbol_native, decimal_digits, rounding };
      });
      
      try {
        console.log(db)
        const savedCurrencies = await db.Currency.insertMany(currencies)
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
    console.log(error.message);
  }
}

getCurrencies();