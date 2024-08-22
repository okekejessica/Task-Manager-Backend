// In backend development, a model is like a blueprint for the data in your application. it defines the structure of your data and how it interacts with the data base

const mongoose = require("mongoose"); //import Mongoose

const schema = mongoose.Schema; // shorcut to access Mongoose Schema class

// Define the schema for task based on the UI
const taskSchema = new schema({
  title: String, // title of the task
  description: String, // description of the task
  tag: String, // tag associated with the task "urgent" or "important"
});

module.exports = mongoose.model("task",taskSchema); // Export the model to be used for request operations in the controller
