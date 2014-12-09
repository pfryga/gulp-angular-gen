'use strict';

angular.module('manager')
    .controller('DepartmentsCtrl', function ($scope, $stateParams, DepartmentsDataService) {
		$scope.departmentName = DepartmentsDataService.getCurrentName($stateParams.departmentKey);
    });
