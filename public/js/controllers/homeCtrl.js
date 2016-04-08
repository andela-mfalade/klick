( function () {
//--

    angular
        .module('klick.controllers', ['klick.services'])
        .controller('homeController', homeController);

        homeController.$inject = ['auth']

        function homeController(auth) {
            var vm = this;
            vm.loginUser = login;

            function login() {
                return auth.login(vm.username);
            }

        }

//--
} )();
