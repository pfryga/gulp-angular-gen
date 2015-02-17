'use strict';

angular.module('manager')
    .service('DepartmentCarouselsService', function($http) {
        this.promise;
        this.getCarousels = function (departmentKey) {
            var url = 'http://localhost:8080/carousels/' + departmentKey;

            this.promise = $http.get(url, { cache: true}).then(function (response) {
                return response;
            });

            return this.promise;
        };
    });
