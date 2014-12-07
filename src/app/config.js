'use strict';

angular.module('item', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
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
      .state('subpage', {
        url: '/subpage',
        views: {
					'pageView': {
		        templateUrl: 'app/subpage/subpage.html',
		        controller: 'SubpageCtrl'
					}
				}
      });

    $urlRouterProvider.otherwise('/');
  })
;
