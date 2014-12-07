'use strict';

angular.module('item')
  .controller('NavbarCtrl', function ($scope, $rootScope) {
	$scope.toggleMenu = function () {
		$rootScope.menuIsShown = !($rootScope.menuIsShown);
	};
  });
