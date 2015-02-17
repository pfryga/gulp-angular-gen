'use strict';

angular.module('manager')
    .controller('DepartmentsCtrl', function ($scope, $stateParams, DepartmentsDataService, DepartmentCarouselsService) {
		$scope.departmentKey = $stateParams.departmentKey;
		$scope.departmentCarousels = DepartmentCarouselsService.getCarousels($stateParams.departmentKey);

		DepartmentsDataService.getCurrentName($stateParams.departmentKey).then(function (data) {
			$scope.departmentName = data;
		});

		if ($stateParams.departmentTab) {
			$scope.currentTabId = $stateParams.departmentTab;
		} else {
			if ($scope.departmentCarousels.length) {
				$scope.currentTabId = $scope.departmentCarousels[0].key;
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
