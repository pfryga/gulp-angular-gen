angular.module('item').directive('resize', function ($rootScope, $window) {
    return function (scope, element) {
        var w = angular.element($window);

        w.bind('resize', function () {
            if (this.innerWidth > 767) {
                $rootScope.menuIsShown = false;
            };
        });
    }
});