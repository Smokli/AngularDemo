
var demoApp = angular.module('demoApp', ['ngRoute']);

var controllers = {};


controllers.SimpleController = function ($scope) {

    $scope.customers = [{ name: 'Pesho', city: 'Varna' }, { name: 'Kamen', city: 'Sofia' }];

    $scope.addCustomer = function () {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })
    };

};


demoApp.factory('simpleFactory', function () {
    var customers = [{ name: 'Pesho', city: 'Varna' }, { name: 'Kamen', city: 'Sofia' }];

    var factory = {};

    factory.getCustomers = function () {
        return customers;
    }

    return factory;
});

demoApp.controller('SimpleController', function ($scope, simpleFactory) {

    $scope.customers = [];
    $scope.customers = simpleFactory.getCustomers();

    $scope.addCustomer = function () {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        });
        $scope.newCustomer.name = '';
        $scope.newCustomer.city = '';

    }
});

demoApp.config(['$routeProvider',
    function ($routeProvider) {

    $routeProvider
        .when('/',
        {
            templateUrl: 'View/View1.html',
            controller: 'SimpleController'
        })
        .when('/view2',
        {
            templateUrl: "View/View2.html",
            controller: 'SimpleController'
        })
        .otherwise({ redirectTo: '/' });
}]);
