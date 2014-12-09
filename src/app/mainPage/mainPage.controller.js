'use strict';

angular.module('manager')
  .controller('MainPageCtrl', function ($scope, $rootScope) {
    $rootScope.fullWidthLayout = false;
  	$rootScope.additionalClass = 'main-page';
  });
