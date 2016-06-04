'use strict';
var userModel = require('../models/user');

var utils = {
    getOrCreateUser: function(req, res) {
        var username = req.body.username;
        var response = userModel.retrieveUserInfo(username, function (userDetails) {
            res.send(userDetails);
        });
    },

    fetchUserRecord: function(req, res) {
        var username = req.params.username;
        var response = userModel.retrieveUserInfo(username, function (userDetails) {
            res.send(userDetails);
        });
    },

    handleFaviconRequest: function(req, res) { req.end(); }

};

module.exports = utils;
