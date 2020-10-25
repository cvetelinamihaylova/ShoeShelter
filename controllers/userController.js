module.exports = {
    get:{
        login(req, res, next){
            res.render('./home/home.hbs')
        },
        register(req, res, next){
            res.render('./home/home.hbs')
        }
    }
};