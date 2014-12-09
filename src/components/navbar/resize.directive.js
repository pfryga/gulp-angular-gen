'use strict';

angular.module('manager').directive('hideNavOnResize', function ($rootScope, $window) {
    return function () {
        var w = angular.element($window);

        w.bind('resize', function () {
            if (this.innerWidth > 767) {
	            $rootScope.$apply();
                $rootScope.menuIsShown = false;
            }
        });
    };
});