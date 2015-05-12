'use strict';

/**
 * @ngdoc function
 * @name ciSpaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ciSpaApp
 */
angular.module('ciSpaApp')
  .controller('MainCtrl', function ($scope, Chat, AppBaseUrl) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.name = 'Anonymous';
    $scope.gameId = '';
    $scope.controllerLinkBase = AppBaseUrl + '/#/controller?gameId=';
    $scope.messages = Chat.messages;
    
    $scope.sendMessage = function() {
      Chat.sendMessage($scope.name, $scope.message);
      $scope.message = null;
    };
    
    Chat.hub.promise.done(function() {
      if ($scope.gameId === '') {
        $scope.gameId = Chat.hub.connection.id;
        $scope.$apply();
      }
    });
  });
