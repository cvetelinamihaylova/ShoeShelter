const jwt = require('jsonwebtoken');
const  getJwt  = require('./get-jwt');
const { jwtSecret } = require('../config');
const { userModel } = require('../models');

module.exports = (req, res, next) => {
    const token = getJwt(req);
    if (!token) { next(); return; }
    jwt.verify(token, jwtSecret, function (err, decoded) {
        if (err) { next(err); return; }
        userModel.findOne({ _id: decoded.userId })
            .then(user => {
                req.user = user._id;
                res.locals.isLoggedIn = !!req.user;
                res.locals.fullName = user.fullName;
                next();
            })
            .catch(next); 
    });
};