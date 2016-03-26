'use strict';

/* App Module */

var codeschoolApp = angular.module('codeschoolApp', ['ngRoute']);

codeschoolApp.config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl : 'views/home.html',
        controller  : 'mainController'
      }).
      when('/user/:userID', {
        templateUrl: 'views/user_show.html',
        controller: 'UserShowCtrl'
      });
    //   otherwise({
    //     redirectTo: '/phones'
    //   });
  });
  
  
 codeschoolApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
  
  codeschoolApp.controller('UserShowCtrl', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });