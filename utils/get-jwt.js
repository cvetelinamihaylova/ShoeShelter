const { authCookieName } = require('../config');

module.exports = function getJwt(req){
    return req.cookies[authCookieName];
};