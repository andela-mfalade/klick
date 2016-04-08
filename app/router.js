var express = require('express');
var userUtils = require('./controllers/userController')

function routerConfig() {
    var apiRouter = express.Router({ mergeParams: true });

    apiRouter.route('/users')
        .post(userUtils.loginUser);

    return apiRouter;
}


module.exports = routerConfig();
