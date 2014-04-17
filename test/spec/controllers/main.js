'use strict';

describe('Controller: MainCtrl', function () {

  var location, scope;

  // First we need to specify the application module
  beforeEach(module('swFrontApp'));

  //Injecting the dependencies
  beforeEach(inject(function($controller, $rootScope, $location){
    location = $location;
    scope = $rootScope.$new();
    $controller('NavigationController', {
      $scope: scope
    });
  }));

  describe("isActive", function() {
    it("returns true when paths are the same", function() {
      location.path('/');
      expect(scope.isActive('/')).toBeTruthy();
    });

    it("returns false when paths are fdifferent", function() {
      location.path('/edges');
      expect(scope.isActive('/')).toBeFalsy();
    });

    it("returns true when it starts with the same word", function() {
      location.path('/edges/1/show');
      expect(scope.isActive('/edges')).toBeTruthy();
    });

    it("returns true when it starts with the same word followed by query string", function() {
      location.path('/edges?id=1');
      expect(scope.isActive('/edges')).toBeTruthy();
    });
  });

});
