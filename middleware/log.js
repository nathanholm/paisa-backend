const chalk = require("chalk");

// Return a array of formatted strings:
// Line 1: "{where}"
// Line 2: "{name}: {message}"
const handleText = ( name, message, where ) => {
  // name or message must be supplied as minimum number of arguments.
  const line1 = where ? `${where} ` : "";
  const line2 = name && message ? `${name} | ${message}` : (name || message);
  
  return [line1, line2];
} // --------------------------------------------------------------------------

// Log an Error Message in format:
// Line 1: (Red text)
// Line 2: (White text)
const error = ({ name, message, where }) => {
  const [line1, line2] = handleText(name, message, where);
  
  // Console log a formatted error message.
  console.error(chalk`\n{red ${line1}Error:}\n${line2}`);
} // --------------------------------------------------------------------------

// Log a Success Message in format:
// Line 1: (Green text)
// Line 2: (White text)
const success = ({ name, message, where }) => {
  const [line1, line2] = handleText(name, message, where);
  
  // Console log a formatted success message.
  console.log(chalk`\n{green ${line1}Success:}\n${line2}`);
} // --------------------------------------------------------------------------


// Map Mongoose errors Object to an array:
// Console log an error message for each error in array,
// Return an object with a name and message key.
const mongooseErrors = (errorList, where) => {
  const output = Object.keys(errorList).map((e) => {
    // Destructure error Object
    const { name, message } = errorList[e]
    
    error({ name: name, message: message, where});
    
    return { name, message }
  });
  return output;
} // --------------------------------------------------------------------------

module.exports = { error, success, mongooseErrors }