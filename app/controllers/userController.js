'use strict';
var userModel = require('../models/user');

var utils = {
    fetchUser: function(req, res) {
        var username = req.body.username;
        var response = userModel.retrieveUserInfo(username, function (userDetails) {
            res.send(userDetails);
        });
    }
}

module.exports = utils;
