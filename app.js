require("dotenv").config(); // load environment variables from .env file into process.env

const express = require("express"); //import Express framework

const mongoose = require("mongoose"); // Import mongoose for MongoDB interactions

const cors = require("cors");

const app = express(); // spining up the express framework server

const port = 3000; // Define the port number for the server

// CORS (Cross-Origin-Resource Sharing) , We use this when the frontend and backend are from different origins (domains, ports or protocols) and the backend hasnt been configured to accept request from the frontend origin

app.use(cors());

const taskRouter = require("./routes/taskRouter"); // Import the taskRouter for task related routes
const notFound = require("./middlewares/notFound"); // import a middleware to handle 404 not found

// middleware are app.use
app.use(express.json()); // this is a middleware used to parse incoming JSON requests from postman, allowing access to the req.body

app.use("/api/task", taskRouter); // Mount the taskRouter at /api/task, alll task-related routes start with /api//task

app.use(notFound); // use the custom 404 middleware for handling unmatched route

const start = async () => {
  try {
    //  Attempt to connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
    // start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    // log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
// MongoDB is a NoSQL dataase that stores data in a flexible json like format

// jessicaokeke50
// z68CkgqFmNIrfN7G
// mongodb+srv://jessicaokeke50:z68CkgqFmNIrfN7G@cluster0.qha2u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
