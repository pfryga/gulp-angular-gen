'use strict';

angular.module('manager')
	.service('DepartmentsDataService', function($http) {
		this.promise;
		this.fetchDepartments = function () {

			if ( !this.promise ) {
				this.promise = $http.get('http://localhost:8080/departments').then(function (response) {
					return response.data.items;
				});
			}

			return this.promise;
		};

		this.getCurrentName = function (departmentKey) {
			var departments = this.fetchDepartments();

			for (var i = 0; i < departments.length; i++) {
				if (departments[i].key === departmentKey) {
					return departments[i].name;
				}
			}

			return 0;
		};
	});
