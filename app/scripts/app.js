'use strict';

/**
 * @ngdoc overview
 * @name ciSpaApp
 * @description
 * # ciSpaApp
 *
 * Main module of the application.
 */
angular
  .module('ciSpaApp', [
    'ngRoute',
    'SignalR'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('AppBaseUrl', 'http://ci-spa.azurewebsites.net');