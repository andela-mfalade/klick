var express = require('express');
var userUtils = require('./controllers/userController')

function routerConfig() {
    var apiRouter = express.Router({ mergeParams: true });

    apiRouter.route('/users')
        .post(userUtils.getOrCreateUser);

    apiRouter.route('/users/:username')
        .get(userUtils.fetchUserRecord);

    apiRouter.route('/favicon.ico')
        .get(userUtils.handleFaviconRequest);

    return apiRouter;
}


module.exports = routerConfig();
