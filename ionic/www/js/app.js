angular.module('propertycross', ['ionic',
                                 'propertycross.services',
                                 'propertycross.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })

        .state('results', {
            url: '/results/:searchTerm',
            templateUrl: 'templates/results.html',
            controller: 'ResultsCtrl'
        })

        .state('property', {
            url: '/property/:propertyId',
            templateUrl: 'templates/property.html',
            controller: 'PropertyCtrl'
        })

        .state('favourites', {
            url: '/favourites',
            templateUrl: 'templates/favourites.html',
            controller: 'FavouritesCtrl'
        });

  $urlRouterProvider.otherwise('/home');

});
