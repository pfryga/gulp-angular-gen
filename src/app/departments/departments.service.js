'use strict';

angular.module('manager')
	.service('DepartmentsDataService', function($http) {
        this.carouselsPromise;
		this.departmentsPromise;
		this.currentDepartmentsPromise;
		this.itemPromise;
		this.offersPromise;

		this.fetchDepartments = function () {
			var url = 'http://localhost:8080/departments';

			if ( !this.departmentsPromise ) {
				this.departmentsPromise = $http.get(url, { cache: true}).then(function (response) {
					return response.data.items;
				});
			}

			return this.departmentsPromise;
		};

		this.getCurrentName = function (departmentKey) {
			this.currentDepartmentsPromise = this.fetchDepartments().then(function(data) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].key === departmentKey) {
						return data[i].name;
					}
				}
			});

			return this.currentDepartmentsPromise;
		};

        this.getCarousels = function (departmentKey) {
            var url = 'http://localhost:8080/carousels/' + departmentKey;

            this.carouselsPromise = $http.get(url, { cache: true}).then(function (response) {
                return response;
            });

            return this.carouselsPromise;
        };

        this.getItemDetails = function (id) {
			var url = 'http://localhost:8080/offer/' + id;

			this.itemPromise = $http.get(url, { cache: true}).then(function (response) {
				return response.data;
			});

			return this.itemPromise;
		};

		this.addItemToCarousel = function (id, carousel, department) {
			var req = {
				method: 'POST',
				url: 'http://localhost:8080/offer/' + id,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				data: {
					carousel: carousel,
					department: department
				}
			}

			return $http(req);
		};

		this.fetchOffersList = function (department, carousel) {
			var url = 'http://localhost:8080/offers/' + department + '/' + carousel;

			this.offersPromise = $http.get(url, { cache: true}).then(function (response) {
				return response.data;
			});

			return this.offersPromise;
		};
	});
