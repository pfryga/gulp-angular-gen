'use strict';

angular.module('manager')
  .controller('NavbarCtrl', function ($scope, $rootScope) {
	$scope.toggleMenu = function () {
		$rootScope.menuIsShown = !($rootScope.menuIsShown);
	};
  });
