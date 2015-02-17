'use strict';

angular.module('manager')
    .controller('DepartmentsCtrl', function ($scope, $stateParams, DepartmentsDataService, DepartmentTabsService, DepartmentCarouselsService) {
		$scope.departmentTabs = DepartmentTabsService.getCorrectTabs($stateParams.departmentKey);
		$scope.departmentKey = $stateParams.departmentKey;
		$scope.departmentCarousels = DepartmentCarouselsService.test();

		DepartmentsDataService.getCurrentName($stateParams.departmentKey).then(function (data) {
			$scope.departmentName = data;
		});

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

		/* temp isShown variable */
		$scope.isShown = false;
		$scope.showSearchResult = function () {
			$scope.isShown = true;
		};
		/* end of temp variable */
    });
