'use strict';

angular.module('item')
  .controller('SubpageCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
        'title': 'Lorem ipsum',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'Lorem ipsum',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
