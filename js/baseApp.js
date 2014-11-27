

// esto arranca la aplicacion

var apuesta = angular.module('apuesta', ['ngRoute']);

apuesta.config(['$routeProvider',
                function ($routeProvider) {
        $routeProvider
            .when('/partidos', {
                templateUrl: 'partials/partidos.html',
               // controller: 'partidoController'
            })
            .when('/', {
                templateUrl: 'partials/inicio.html',
            })
            .when('/acvjuv.html', {
                templateUrl: 'partials/acvjuv.html',
            })
            .when('/bavbo.html', {
                templateUrl: 'partials/bavbo.html',
            })
            .when('/ccvudc.html', {
                templateUrl: 'partials/ccvudc.html',
            })
            .when('/chvliv.html', {
                templateUrl: 'partials/chvliv.html',
            })
            .when('/grvin.html', {
                templateUrl: 'partials/grvin.html',
            })
            .when('/pavol.html', {
                templateUrl: 'partials/pavol.html',
            })
            .when('/rivbo.html', {
                templateUrl: 'partials/rivbo.html',
            })
            .when('/rmvba.html', {
                templateUrl: 'partials/rmvba.html',
            })
            .otherwise({
                redirectTo: '/'
            });
                }]);