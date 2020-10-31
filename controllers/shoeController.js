const { shoeModel } = require('../models');

module.exports = {
    get: {
        all(req, res, next) {
            shoeModel.find({})
                // .populate('accessories')
                .lean()
                .then((shoes) => {
                    console.log(shoes)
                    res.render('./shoes/shoes.hbs', { shoes })
                })
                .catch(next);
        },
        create(req, res, next) {
            res.render('./shoes/create.hbs')
        },
        details(req, res, next) {
            const id = req.params.id;
            shoeModel
                .findOne({ _id: id })
                .lean()
                .then(shoe => {
                    res.render('./shoes/details.hbs', shoe)
                })
                .catch(next);
        },
        edit(req, res, next) {
            const id = req.params.id;
            shoeModel
                .findOne({ _id: id })
                .lean()
                .then(shoe => {
                    console.log(shoe)
                    console.log(shoe)
                    res.render('./shoes/edit.hbs', shoe);
                })
                .catch(next);
        },
        delete(req, res, next) {
            const id = req.params.id;

            shoeModel
                .deleteOne({ _id: id })
                .then(() => {
                    res.redirect('/shoes/all');
                })
                .catch(next)
        },
    },
    post: {
        create(req, res, next) {
            shoeModel
                .create({ ...req.body, seller: req.user })
                .then(() => {
                    res.redirect('/shoes/all');
                })
                .catch(next);
        },
        edit(req, res, next) {
            const id = req.params.id;

            shoeModel
                .updateOne({ _id: id }, { $set: { ...req.body } })
                .then(() => {
                    res.redirect(`/shoes/details/${id}`);
                })
                .catch(next);
        }
    }
};