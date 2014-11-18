Parse.initialize("PRBxGd1sUZedOOFrCbUtQv1CKnhtSoTim38cKLqv", "L0ZeWfQ6GZkwXTGZOlmaErAP60u4uuxHKnOGskc0");

// esto arranca la aplicacion

var apuesta = angular.module('apuesta', ['ngRoute']);

apuesta.config(['$routeProvider',
                function ($routeProvider) {
        $routeProvider
            .when('/partidos', {
                templateUrl: 'partials/partidos.html',
                controller: 'partidoController'
            })
            .when('/partials/inicio', {
                templateUrl: 'partials/inicio.html',
            })
            .otherwise({
                redirectTo: '/'
            });
                }]);