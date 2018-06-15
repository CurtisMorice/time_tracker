let TimeApp = angular.module('TimeApp', ['ngMaterial', 'ngRoute', 'ngTable'])
    .run(function() {
        console.log(`in TimeApp/client.js`);
    });





TimeApp.config(function($routeProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('cyan')
        .accentPalette('light-blue');

    $routeProvider.when('/home', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/entries', {
        templateUrl: '/views/add.entry.html',
        controller: 'AddController as vm'
    }).when('/manPro', {
        templateUrl: '/views/manage.projects.html',
        controller: 'ManageController as vm'
    }).otherwise({
        template: '<h1>You done messed Up Boy</h1>'
    });

});