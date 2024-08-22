// A Controller in backend is like a manager that handles the logic for specific part of your application . it decides what should happen when a request comes in and co-ordinates between the request, your data and response.

const Task = require("../models/task");
const validateID = require("../utils/validateID");


// =============Function to get all the tasks=====================
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); // Retrieve all tasks from the database
  res.status(200).json({ tasks }); // Send the retrieved tasks in a JSON RESPONSE
};
// find is for get request

// =======================Function for creating a new task =============
const createTask = async (req, res) => {
  const { title, description, tag } = req.body; // destructuring the required fields from the request body

  if (!title) {
    return res.status(400).json({ message: "Please provide a Title" });
  }
  if (!description) {
    return res.status(400).json({ message: "Please provide a Description" });
  }
  if (!tag) {
    return res.status(400).json({ message: "Choose a Tag" });
  }

  const task = await Task.create(req.body); // create a new task with the request data
  res.status(201).json({ message: "Task created Successfuly", task }); // send a status code with a message of success
};

// ================ Function for editing an existing task=================

const editTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from the request parameters

 if (!validateID(id)) {
  return res.status(400).json({message: `ID: ${id} is not valid`})
 }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); // Updates the task with the provided data
  res.status(200).json({ message: "Task Updated Successfully" }); // send the success message if updated successfully
};

// ==============Function to delete an existing task=====

const deleteTask = async (req, res) => {
  const { id } = req.params; // get the Task ID from the request parameters

  if (!validateID(id)) {
    return res.status(400).json({message: `ID: ${id} is not valid`})
   }

  const task = await Task.findOneAndDelete({ _id: id }); // Delete the task with the special ID
  res.status(200).json({ message: "Task Successfully Deleted" }); // send the success message if task is deleted successfully
};

//================ Function to get each task==================

const eachTask = async (req, res) => {
  const { id } = req.params; // get the Task ID from the request parameters

  if (!validateID(id)) {
    return res.status(400).json({message: `ID: ${id} is not valid`})
   }
   
  const task = await Task.findOne({ _id: id }); // Find the task with the special ID
  res.status(200).json({ task }); // send the found task in JSON response
};

module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask }; // export the controller function to beused in the router
