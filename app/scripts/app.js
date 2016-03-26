'use strict';

/* App Module */

var codeschoolApp = angular.module('codeschoolApp', [
  'ngRoute',
  'phonecatControllers'
]);

codeschoolApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/user/:userID', {
        templateUrl: 'views/user_show.html',
        controller: 'UserShowCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);