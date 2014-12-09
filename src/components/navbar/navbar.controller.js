'use strict';

angular.module('manager')
  .controller('NavbarCtrl', function ($scope, $rootScope, $stateParams, DepartmentsDataService) {
	$scope.toggleMenu = function () {
		$rootScope.menuIsShown = !($rootScope.menuIsShown);
	};
	$scope.departmentsItems = DepartmentsDataService.fetchDepartments();
	$scope.currentDepartmentKey = $stateParams.departmentKey;
  });
