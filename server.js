require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const passport = require("./config/passport")();

const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on("open", () => {
  console.log("Mongo is Connected");
});

//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(passport.initialize());



//CONTROLLAAAAAAA
//calls snake in controller
const snakeController = require('./controllers/snakes')
//sets up snake as the snakeController
app.use('/snakes', snakeController)

const users = require("./controllers/users");
app.use("/users", users);



//LISTENER
app.listen(PORT, () => {
    console.log(`The port that's open is: ${PORT}`)
})
