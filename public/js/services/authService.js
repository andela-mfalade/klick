( function() {
//--

    angular
        .module('klick.services', [])
        .factory('auth', auth);

    auth.$inject = ['$http', 'options']

    function auth($http, options) {
        function login(username) {
            reqUrl = options.API_URL + 'users'
            $http.post(reqUrl, {username: username})
                .then(function(response) {
                    console.log(response);
                })
        }
        return { login: login };
    }

//--
} )();
