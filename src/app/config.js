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
      .state('electronics', {
        url: '/elektronika',
        views: {
					'pageView': {
		        templateUrl: 'app/department/department.html',
		        controller: 'DepartmentCtrl'
					}
				}
      });

    $urlRouterProvider.otherwise('/');
  })
;
