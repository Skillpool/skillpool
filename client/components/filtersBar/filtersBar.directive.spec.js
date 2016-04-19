'use strict';

describe('Directive: filtersBar', function () {

  // load the directive's module and view
  beforeEach(module('skillpoolApp.filtersBar'));
  beforeEach(module('components/filtersBar/filtersBar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<filters-bar></filters-bar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the filtersBar directive');
  }));
});
