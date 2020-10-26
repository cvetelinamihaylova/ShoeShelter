const { userController } = require('../controllers');

module.exports = (router) => {
    router.get('/login', userController.get.login);
    router.get('/register', userController.get.register);
    router.get('/profile', userController.get.profile);

    router.post('/login', userController.post.login);
    router.post('/register', userController.post.register);

    return router;
};