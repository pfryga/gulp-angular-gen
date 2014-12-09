'use strict';

angular.module('manager')
	.service('DepartmentsDataService', function() {
		this.fetchDepartments = function () {
			var departments = [
				{
					key: 'elektronika',
					name: 'Elektronika'
				},
				{
					key: 'moda-i-uroda',
					name: 'Moda i uroda'
				},
				{
					key: 'dziecko',
					name: 'Dziecko'
				},
				{
					key: 'kultura-i-rozrywka',
					name: 'Kultura i rozrywka'
				},
				{
					key: 'sport-i-wypoczynek',
					name: 'Sport i wypoczynek'
				},
				{
					key: 'motoryzacja',
					name: 'Motoryzacja'
				},
				{
					key:'kolekcje-i-sztuka',
					name: 'Kolekcje i sztuka'
				},
				{
					key: 'firma-i-uslugi',
					name: 'Firma i usługi'
				}
			];

			return departments;
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