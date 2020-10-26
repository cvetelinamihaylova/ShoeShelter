const { userModel } = require('../models');

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
        }
    },
    post: {
        login(req, res, next) {
        },
        register(req, res, next) {
            const { email, username, password, repeatPassword } = req.body;
        },
    }
};