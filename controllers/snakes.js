const express = require("express");
const router = express.Router();
const Snake = require("../models/snake.js");

// Index
router.get("/", (req, res) => {
  // Use Snake model to get all Snakes
  Snake.find({}, (error, allSnakes) => {
    error ? res.status(404).json(error) : res.status(200).json(allSnakes);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  // Delete document from collection
  Snake.findByIdAndRemove(req.params.id, (err, snake) => {
    error ? res.status(404).json(error) : res.status(200).json(snake);
  });
});

// Update
router.put("/:id", (req, res) => {
  console.log(req.body);
  // Update the snake document using our model
  Snake.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedSnake) => {
      error ? res.status(404).json(error) : res.status(200).json(updatedSnake);
    }
  );
});

// Create
router.post("/", (req, res) => {
  console.log(req.body);
  if (req.body.venomous === 'on') {
        req.body.venomous = true;
    } else {
        req.body.venomous = false;
    }
    if (req.body.prooven === 'on') {
        req.body.prooven = true;
    } else {
        req.body.prooven = false;
    }
  // Use Model to create Snake Document
  Snake.create(req.body, (error, createdSnake) => {
    // Once created - respond to client
    error ? res.status(404).json(error) : res.status(200).json(createdSnake);
  });
});

// Show
router.get("/:id", (req, res) => {
  // Find the specific document
  Snake.findById(req.params.id, (error, foundSnake) => {
    // render the Show route and pass it the foundSnake
    error ? res.status(404).json(error) : res.status(200).json(foundSnake);
  });
});

// export router
module.exports = router;



// const Snake = require('../models/snake.js')
// const router = require('./mainController.js')({
//   Model: Snake,
//   ViewPath: 'snake',
//   Router: require('express').Router(),
//   booleanKey: ['']
// })
// //export router
// module.exports = router
