( function () {
//--

    angular
        .module('klick')
        .controller('dashboardController', dashboardController);

        dashboardController.$inject = ['$location', '$rootScope', 'auth']

        function dashboardController($location, $rootScope, auth) {
            var vm = this;
            function fetchActiveUserRecords(){
                var activeUser = auth.getUserFromCookieStore();
                auth.fetchUserRecords(activeUser, function (userInfo) {
                    vm.currentUser = userInfo.data;
                    console.log(vm.currentUser, "This is the cur user..");
                })
            }
            fetchActiveUserRecords();
        }

//--
} )();
