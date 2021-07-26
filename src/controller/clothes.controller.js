'use strict';

const Clothes = require('../Models/Clothes');

const clothes = new Clothes();

const getAll = async(req, res) => {
  const resObj = await clothes.read(req.params.id);
  res.json(resObj);
};

const createOne = async(req, res) => {
  const resObj = await clothes.create(req.body);
  res.json(resObj);
};

const updateOne = async(req, res) => {
  const resObj = await clothes.update(req.params.id, req.body);
  res.json(resObj);
};

const deleteOne = async(req, res) => {
  const resObj = await clothes.delete(req.params.id);
  res.json(resObj);
};

module.exports = {
  getAll,
  createOne,
  updateOne,
  deleteOne,
};
