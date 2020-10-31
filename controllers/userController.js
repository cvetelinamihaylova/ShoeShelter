const { userModel } = require('../models');
const jwt = require('jsonwebtoken');
const promisify = require('util').promisify;
const signToken = promisify(jwt.sign);
const { jwtSecret, authCookieName } = require('../config');
const getJwt = require('../utils/get-jwt');

module.exports = {
    get: {
        login(req, res, next) {
            res.render('./user/login.hbs')
        },
        register(req, res, next) {
            res.render('./user/register.hbs')
        },
        profile(req, res, next) {
            res.render('./user/profile.hbs')
        },
        logout(req, res, next) {
            const token = getJwt(req);
            if (!token) { res.redirect('/home'); return; }
            jwt.verify(token, jwtSecret, function (err, payload) {
                if (Date.now() < payload.exp) {
                    //if token is valid, put it in blacklist
                }
            });
            res.clearCookie(authCookieName);
            res.redirect('/home');
        }
    },
    post: {
        login(req, res, next) {
            const { email, password } = req.body;
            userModel.findOne({ email })
                .then(user => Promise.all([user, user ? user.comparePasswords(password) : false]))
                .then(([user, match]) => {
                    if (!match) {
                        res.render('./user/login', { errorMessage: 'Wrong username or password' });
                        return;
                    }
                    return signToken({ userId: user._id }, jwtSecret);
                })
                .then(jwtToken => {
                    res.status(200);
                    res.cookie(authCookieName, jwtToken, { httpOnly: true });
                    res.redirect('/shoes/all');
                })
                .catch(next);
        },
        register(req, res, next) {
            const { email, fullName, password, repeatPassword } = req.body;

            userModel.findOne({ email })
                .then(user => {
                    if (user) {
                        throw new Error('Email is already in use!');
                    }
                    return userModel.create({ email, fullName, password });
                })
                .then(() => {
                    res.redirect('/user/login');
                })
                .catch(console.log);
        }
    }
};