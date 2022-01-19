const { User } = require('../db/models/index');
const { EXCLUDEDATES } = require('../utils/db-utils');
const createError = require('http-errors');

const userControllers = {};

userControllers.getAllUsers = (req, res, next) => {};

module.exports = userControllers;
