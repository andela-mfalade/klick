( function () {
//- BOL


    angular
        .module('klick.controllers', ['klick.services'])
        .controller('homeController', homeController);


        function homeController(auth) {
            var vm = this;
            vm.loginUser = login;

            function login() {
                return auth.login();
            }

        }


//- EOL
} )();
