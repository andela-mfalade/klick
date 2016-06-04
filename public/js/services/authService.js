( function() {
//--

    angular
        .module('klick')
        .factory('auth', auth);

    auth.$inject = ['$http', 'options', '$cookies']

    function auth($http, options, $cookies) {
        function fetchUserRecords(username) {
            var reqUrl = options.API_URL + 'users/' + username;
            return $http
                .get(reqUrl)
                .then(function(response) {
                    return response;
                })
        }

        function login(username) {
            reqUrl = options.API_URL + 'users'
            return $http
                .post(reqUrl, {username: username})
                .then(function(response) {
                    saveCurrentUserInCookieStore(username);
                    return response;
                })
        }

        function getUserFromCookieStore(){
            return $cookies.get('currentUser');
        }

        function saveCurrentUserInCookieStore(username) {
            $cookies.put('currentUser', username);
        }

        return {
            login: login,
            fetchUserRecords: fetchUserRecords,
            getUserFromCookieStore: getUserFromCookieStore,
            saveCurrentUserInCookieStore: saveCurrentUserInCookieStore
        };
    }



//--
} )();
