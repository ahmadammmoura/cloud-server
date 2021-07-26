'use strict';

const router = require('express').Router();
const foodController = require('../controller/food.controller');
const validator = require('../middleware/validator');

router.get('/', foodController.getAll);
router.get('/:id', foodController.getAll);
router.post('/', validator, foodController.createOne);

router.put('/:id', validator, foodController.updateOne);
router.delete('/:id', foodController.deleteOne);

module.exports = router;
