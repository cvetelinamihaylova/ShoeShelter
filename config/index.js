const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbUrl: 'mongodb://127.0.0.1:27017/shoeShelter',
        cookie: 'x-auth-token',
        secret: 'superSecret',
        saltRounds: 10
    }
};

module.exports = config[env];
