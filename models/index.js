const mongoose = require('mongoose');
const getUserModel = require('./user');
const getShoeModel = require('./shoe');


module.exports = {
    userModel: getUserModel(mongoose),
    shoeModel: getShoeModel(mongoose),
}