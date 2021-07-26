'use strict';

module.exports = (req, res, next) => {
  if (!req.body.size || !req.body.type) {
    next('Invalid req data');
  } else {
    next();
  }
};
