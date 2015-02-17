'use strict';

angular.module('manager')
    .service('DepartmentCarouselsService', function() {
        this.fetchCarousels = function (departmentKey) {

            var carousels = {
                "collection": "electronics",
                "items": [
                    {
                        "_id": "54e3530effcd8f3cb61a9e5f",
                        "key": "popular",
                        "name": "Pupularne",
                        "department": "electronics",
                        "__v": 0
                    },
                    {
                        "_id": "54e35311ffcd8f3cb61a9e60",
                        "key": "bestsellers",
                        "name": "Bestsellery",
                        "department": "electronics",
                        "__v": 0
                    }
                ]
            };

            return carousels.items;
        };

        this.getCarousels = function (departmentKey) {
            var carousels = this.fetchCarousels(departmentKey);
            return carousels;
        };
    });
