'use strict';

angular.module('manager')
  .controller('NavbarCtrl', function ($scope, $rootScope, $stateParams, DepartmentsDataService) {
	$scope.toggleMenu = function () {
		$rootScope.menuIsShown = !($rootScope.menuIsShown);
	};

    DepartmentsDataService.fetchDepartments().then(function(data) {
        $scope.departmentsItems = data;
    });

    $scope.currentDepartmentKey = $stateParams.departmentKey;
  });
