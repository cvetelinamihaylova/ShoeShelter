module.exports = (express, app)=>{
    const router = express.Router(); 
    const routers = require('../routers')(router);

    app.use('/home', routers.homeRouter);
    app.use('/user', routers.userRouter);
};