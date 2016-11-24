'use strict';

/* App Module */


var codeschoolApp = angular.module('codeschoolApp', ['ngRoute']);
    
    
    // codeschoolApp.controller('ErrorService', function($scope, ErrorService) {
    //     $scope.errorService= ErrorService;
    // )};
  
  
    codeschoolApp.controller('mainController', function($scope, $http, $route, $routeParams) {
        $scope.$route = $route;
        $scope.$routeParams = $routeParams;
    });
    
    /*Kontroler strony startowej wyświetla aktualnosci */
    codeschoolApp.controller('frontController', function($scope, $http) {
        $http({method: 'GET', url: 'http://localhost/api/web/index.php/'}).
        success(function(data, status, headers, config) {
            $scope.posts=data;
            console.log($scope);
        }).
        error(function(data, status, headers, config) {
            alert("Coś poszło nie tak");
        });
    });
    /*kontroler listy kursów dostęp dla wszystkich */
    codeschoolApp.controller('CoursesListCtrl', function($scope, $http) {
     
        $http({method: 'GET', url: 'http://localhost/api/web/index.php/courses'}).
        success(function(data, status, headers, config) {
            $scope.courses=data;
        }).
        error(function(data, status, headers, config) {
            alert("Coś poszło nie tak");
        });
    });
    /*kontroler listy lekcji w danym kursie dostepny dla wszystkich */
    codeschoolApp.controller('LessonListCtrl', function($scope, $routeParams, $http) {
            // console.log($routeParams);
        $http({method: 'GET', url: 'http://localhost/api/web/index.php/course/'+$routeParams.courseID}).
        success(function(data, status, headers, config) {
            $scope.lessons=data;
            $scope.message=$routeParams.courseID;
        }).
        error(function(data, status, headers, config) {
           alert("Coś poszło nie tak");
        });
    });
    /*kontroler wyświetlający daną lekcję dostepny tylko dla zalogowanych */
    codeschoolApp.controller('LessonViewCtrl', function($scope, $routeParams, $http, $location) {
            // console.log($routeParams);
        $http({method: 'GET', url: 'http://localhost/api/web/index.php/course/'+$routeParams.courseID+'/lesson/'+$routeParams.lessonID }).
        success(function(data, status, headers, config) {
            $scope.lesson=data;
        }).
        error(function(data, status, headers, config) {
           alert("Nie jesteś zalogowany");
           //$ErrorService.setError('Nie jestes zalogowany');
           $location.path('/login');
        });
    });
    /*kontroler pokazujący dane o zalogowanym użytkowniku, dostępny tylko dla zalogowanego użytkownika */
    codeschoolApp.controller('UserShowCtrl', function($scope, $routeParams, $http) {
        $http({method: 'GET', url: 'http://localhost/api/web/index.php/user/'+$routeParams.userID}).
        success(function(data, status, headers, config) {
            $scope.message=data.login;
        }).
        error(function(data, status, headers, config) {
            alert("Nie jestes zalogowany");
        });
    });
    
    /*główny router aplikacji */
    codeschoolApp.config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl : 'views/home.html',
        controller  : 'frontController'
      }).
      when('/user/:userID', {
        templateUrl: 'views/user_show.html',
        controller: 'UserShowCtrl'
      }).
      when('/courses', {
        templateUrl: 'views/courses_list.html',
        controller: 'CoursesListCtrl'
      }).
      when('/course/:courseID', {
        templateUrl: 'views/lesson_list.html',
        controller: 'LessonListCtrl'
      }).
      when('/course/:courseID/lesson/:lessonID', {
        templateUrl: 'views/lesson.html',
        controller: 'LessonViewCtrl'
      });     

    //   otherwise({
    //     redirectTo: '/phones'
    //   });
  });
