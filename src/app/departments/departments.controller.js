'use strict';

angular.module('manager')
    .controller('DepartmentsCtrl', function ($scope, $stateParams, DepartmentsDataService, DepartmentTabsService) {
		$scope.departmentName = DepartmentsDataService.getCurrentName($stateParams.departmentKey);
		$scope.departmentTabs = DepartmentTabsService.getCorrectTabs($stateParams.departmentKey);
		$scope.departmentKey = $stateParams.departmentKey;

		if ($stateParams.departmentTab) {
			$scope.currentTabId = $stateParams.departmentTab;
		} else {
			if ($scope.departmentTabs.length) {
				$scope.currentTabId = $scope.departmentTabs[0].key;
			}
		}

		$scope.changeTab = function (currentTab) {
			$scope.currentTabId = currentTab;
		};
    });
