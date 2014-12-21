'use strict';

angular.module('manager', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
					'pageView': {
		        templateUrl: 'app/mainPage/mainPage.html',
		        controller: 'MainPageCtrl'
					}
				}
      })
      .state('login', {
        url: '/login',
        views: {
          'pageView': {
            templateUrl: 'app/authorization/authorization.html',
            controller: 'AuthorizationCtrl'
          }
        }
      })
      .state('departments', {
        url: '/departments/:departmentKey',
        views: {
					'pageView': {
		        templateUrl: 'app/departments/departments.html',
		        controller: 'DepartmentsCtrl'
					}
				}
      })
      .state('departmentTab', {
        url: '/departments/:departmentKey/:departmentTab',
        views: {
          'pageView': {
            templateUrl: 'app/departments/departments.html',
            controller: 'DepartmentsCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  })
;
