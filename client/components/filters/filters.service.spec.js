'use strict';

describe('Service: Filters', function () {

  // load the service's module
  beforeEach(module('skillpoolApp'));

  // instantiate service
  var Filters;
  beforeEach(inject(function (_Filters_) {
    Filters = _Filters_;
  }));

  it('should do something', function () {
    expect(!!Filters).to.be.true;
  });

});
