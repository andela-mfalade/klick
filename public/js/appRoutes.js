( function () {
//--

    angular
        .module('klick.router', [])
        .config(config)
        .value('options', {
            'API_URL' : 'http://localhost:5000/api/v1/'
        });


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
