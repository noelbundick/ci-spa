'use strict';

/**
 * @ngdoc service
 * @name ciSpaApp.Chat
 * @description
 * # Chat
 * Factory in the ciSpaApp.
 */
angular.module('ciSpaApp')
  .factory('Chat', function ($rootScope, Hub) {
    var messages = [];
    var hub = new Hub('sampleHub', {
      listeners: {
        addMessage: function(name, message) {
          messages.push({name: name, message: message});
          $rootScope.$apply();
        }
      },
      methods: ['sendMessage'],
      rootPath: 'http://ci-api.azurewebsites.net/signalr',
      logging: true
    });
    
    return {
      hub: hub,
      messages: messages,
      sendMessage: hub.sendMessage
    };
  });
