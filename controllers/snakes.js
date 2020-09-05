const Snake = require('../models/snake.js')
const router = require('./mainController.js')({
  Model: Snake,
  ViewPath: 'snake',
  Router: require('express').Router(),
  booleanKey: ['adminAccess']
})
//export router
module.exports = router
