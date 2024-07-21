// Import packages
const express = require("express");
const getRandomNumber = require("./routes/getRandomNumber");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/getRandomNumber", getRandomNumber);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));