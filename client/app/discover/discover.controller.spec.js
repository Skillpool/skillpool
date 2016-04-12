'use strict';

describe('Component: DiscoverComponent', function () {

  // load the controller's module
  beforeEach(module('skillpoolApp'));

  var DiscoverComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DiscoverComponent = $componentController('DiscoverComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
