const { shoeController } = require('../controllers');

module.exports = (router) => {
    router.get('/all', shoeController.get.all);
    router.get('/create', shoeController.get.create);
    router.get('/edit/:id', shoeController.get.edit);
    router.get('/details/:id', shoeController.get.details);
    router.get('/delete/:id', shoeController.get.delete);

    router.post('/create', shoeController.post.create);
    router.post('/edit/:id', shoeController.post.edit);

    return router;
};