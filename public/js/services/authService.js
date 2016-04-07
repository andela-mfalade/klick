angular.module('klick.services', [])
    .factory('auth', auth);

function auth() { return authUtils; };

var authUtils = {
    login: function () {
        console.log("Hello there.This is one shitty hell of a service.")
    }
}
