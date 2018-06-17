let TimeApp = angular.module('TimeApp', ['ngMaterial', 'ngRoute', 'ngTable'])
    .run(function() {
        console.log(`in TimeApp/client.js`);
    });


TimeApp.config(function($routeProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('light-blue');



    $routeProvider.when('/', {
        templateUrl: '/views/add.entry.html',
        controller: 'AddController as vm'
    }).when('/chart', {
        templateUrl: '/views/chart.html',
        controller: 'ChartController as vm'
    }).when('/manPro', {
        templateUrl: '/views/manage.projects.html',
        controller: 'ManageController as vm'
    }).otherwise({
        template: '<h1>You done messed Up Boy</h1>'
    });

});