let TimeApp = angular.module('TimeApp', ['ngRoute', 'ngMaterial', 'ngAria']);

TimeApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/powers', {
        templateUrl: '/views/add.entry.html',
        controller: 'AddController as vm'
    }).when('/heroes', {
        templateUrl: '/views/manage.projects.html',
        controller: 'ManageController as vm'
    }).otherwise({
        template: '<h1>You done messed Up Boy</h1>'
    });

});