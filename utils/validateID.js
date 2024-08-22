// utils is the short for utilities which refers to a collection of helper functions or modules designed to perform common task on multiple functions

// These task often include things like data validation, formatting or other repitive operations that are used across different part of the application

const mongoose = require("mongoose");

// Utility function to validate MongoDB objectIDs
const validateID = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id); // check if the ID is a valid  MongoDB objectID
  return isValid; // Return the validation result
};

module.exports = validateID; /// Export the function to be used in the controller
