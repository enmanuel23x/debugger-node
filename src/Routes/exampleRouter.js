const express = require('express');
const exampleController = require('../Controllers/exampleController');
const exampleRouter = express.Router();

exampleRouter.route('/')
    .get(exampleController.getRandomNumber);
exampleRouter.route('/extra')
    .get(exampleController.getRandomNumberInRange);

module.exports = exampleRouter;