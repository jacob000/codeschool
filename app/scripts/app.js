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
      }).
      when('/courses', {
        templateUrl: 'views/courses_list.html',
        controller: 'CoursesListCtrl'
      });
    //   otherwise({
    //     redirectTo: '/phones'
    //   });
  });
  
  
 codeschoolApp.controller('mainController', function($scope, $http) {
     
        $http({method: 'GET', url: 'http://localhost/api/web/index.php/'}).
        success(function(data, status, headers, config) {
            $scope.posts=data;
        }).
        error(function(data, status, headers, config) {
            alert("Coś poszło nie tak");
        });
    });
 codeschoolApp.controller('CoursesListCtrl', function($scope, $http) {
     
        $http({method: 'GET', url: 'http://localhost/api/web/index.php/courses'}).
        success(function(data, status, headers, config) {
            $scope.courses=data;
        }).
        error(function(data, status, headers, config) {
            alert("Coś poszło nie tak");
        });
    });
  
  codeschoolApp.controller('UserShowCtrl', function($scope, $http) {
        
        $http({method: 'GET', url: 'http://localhost/api/web/index.php/user/13'}).
        success(function(data, status, headers, config) {
            $scope.message=data.login;
        }).
        error(function(data, status, headers, config) {
            alert("Coś poszło nie tak");
        });
    });