'use strict';

const Food = require('../Models/Food');
const food = new Food();

const getAll = async(req, res) => {
  const resObj = await food.read(req.params.id);
  res.json(resObj);
};

const createOne = async(req, res) => {
  const resObj = await food.create(req.body);
  res.json(resObj);
};

const updateOne = async(req, res) => {
  const resObj = await food.update(req.params.id, req.body);
  res.json(resObj);
};

const deleteOne = async(req, res) => {
  const resObj = await food.delete(req.params.id);
  res.json(resObj);
};

module.exports = {
  getAll,
  createOne,
  updateOne,
  deleteOne,
};
