( function () {
//--

    angular
        .module('klick')
        .controller('loginController', loginController);

        loginController.$inject = ['auth', '$location', '$rootScope']

        function loginController(auth, $location, $rootScope) {
            var vm = this;
            vm.loginUser = login;

            function login() {
                auth.login(vm.username).then(successCallback, errorCallback);
            }

            //-- Callbacks
            function successCallback(response) {
                console.log(response, 'Here is your response..');
                $rootScope.currentUser = response.data;
                $location.path('/dashboard');
            }

            function errorCallback(error) {
                console.log("An error occurred: ", error);
            }
        }

//--
} )();
