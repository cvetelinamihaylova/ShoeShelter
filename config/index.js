const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbUrl: 'mongodb://127.0.0.1:27017/shoeShelter',
        authCookieName : 'x-auth-token',
        jwtSecret: 'superSecret',
        saltRounds: 10
    }
};

module.exports = config[env];
