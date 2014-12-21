'use strict';

angular.module('manager')
	.service('DepartmentTabsService', function() {
		this.fetchDepartmentsTabs = function () {
			var departmentTabs = {
				'elektronika': [{
						key: 'first-tab',
						name: 'First carousel'
					}, {
						key: 'second-tab',
						name: 'Second carousel'
					}, {
						key: 'third-tab',
						name: 'Third carousel'
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