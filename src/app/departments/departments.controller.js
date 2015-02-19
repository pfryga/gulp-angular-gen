'use strict';

angular.module('manager')
    .controller('DepartmentsCtrl', function ($scope, $stateParams, DepartmentsDataService) {
		$scope.departmentKey = $stateParams.departmentKey;

		DepartmentsDataService.getCurrentName($stateParams.departmentKey).then(function (data) {
			$scope.departmentName = data;
		});

		DepartmentsDataService.getCarousels($stateParams.departmentKey).then(function (response) {
			$scope.departmentCarousels = response.data.items;
			$scope.setCurrentTabId();

			DepartmentsDataService.fetchOffersList($stateParams.departmentKey, $scope.currentTabId).then(function (items) {
				$scope.carouselOffers = items.items;
			});
		});

		$scope.changeTab = function (currentTab) {
			$scope.currentTabId = currentTab;
		};

		$scope.getSearchResult = function (id) {
			DepartmentsDataService.getItemDetails(id).then(function (data) {
				$scope.itemDetails = data;
			});
		};

		$scope.addItemToCarousel = function (id, carousel, department) {
			 DepartmentsDataService.addItemToCarousel(id, carousel, department).then(function (response) {
			 	$scope.addItemResult = response;
			 });
		};

		$scope.setCurrentTabId = function () {
			if ($stateParams.departmentTab) {
				$scope.currentTabId = $stateParams.departmentTab;
			} else {
				if ($scope.departmentCarousels.length) {
					$scope.currentTabId = $scope.departmentCarousels[0].key;
				}
			}
		};
    });
