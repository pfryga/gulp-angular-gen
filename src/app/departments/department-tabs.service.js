'use strict';

angular.module('manager')
	.service('DepartmentTabsService', function() {
		this.fetchDepartmentsTabs = function () {
			var departmentTabs = {
				'elektronika': [{
						key: 'first-tab',
						name: 'Najbardziej popularne'
					}, {
						key: 'second-tab',
						name: 'Bestsellery'
					}, {
						key: 'third-tab',
						name: 'Polecane'
					}
				]
			};

			return departmentTabs;
		};

		this.getCorrectTabs = function (departmentKey) {
			var departmentTabs = this.fetchDepartmentsTabs();

			if (departmentTabs[departmentKey]) {
				return departmentTabs[departmentKey];
			}

			return 0;
		};
	});