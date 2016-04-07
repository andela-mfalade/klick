( function () {
//--

    angular
        .module('klick.router', [])
        .config(config);


        function config ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })

            .state('userPage', {
                url: '/user',
                templateUrl: 'views/userPage.html',
                controller: 'userCtrl'
            });

        }

//--
} )();
