'use strict';

const router = require('express').Router();
const clothesController = require('../controller/clothes.controller');
const validator = require('../middleware/validator');

router.get('/', clothesController.getAll);
router.get('/:id', clothesController.getAll);
router.post('/', validator, clothesController.createOne);
router.put('/:id', validator, clothesController.updateOne);
router.delete('/:id', clothesController.deleteOne);

module.exports = router;
