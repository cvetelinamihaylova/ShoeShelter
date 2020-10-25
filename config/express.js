const expressHandlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

module.exports = (express, app) => {
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());

    app.engine('hbs', expressHandlebars({
        layoutsDir: 'views',
        defaultLayout: 'base-layout.hbs',
        partialsDir: 'views/partials',
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');
}