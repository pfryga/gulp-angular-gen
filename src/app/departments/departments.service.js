'use strict';

angular.module('manager')
	.service('DepartmentsDataService', function($http) {
		this.depPromise;
		this.currentDepPromise;
		this.fetchDepartments = function () {
			var url = 'http://localhost:8080/departments';

			if ( !this.depPromise ) {
				this.depPromise = $http.get(url, { cache: true}).then(function (response) {
					return response.data.items;
				});
			}

			return this.depPromise;
		};

		this.getCurrentName = function (departmentKey) {
			this.currentDepPromise = this.fetchDepartments().then(function(data) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].key === departmentKey) {
						return data[i].name;
					}
				}
			});

			return this.currentDepPromise;
		};
	});
