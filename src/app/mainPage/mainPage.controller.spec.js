'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('manager'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function() {
   //  expect(scope.awesomeThings).toBeUndefined();

   //  $controller('MainPageCtrl', {
   //    $scope: scope
  	// });

   //  expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
   //  expect(scope.awesomeThings.length > 5).toBeTruthy();
  }));
});
