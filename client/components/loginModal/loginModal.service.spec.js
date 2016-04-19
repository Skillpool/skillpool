'use strict';

describe('Service: loginModal', function () {

  // load the service's module
  beforeEach(module('skillpoolApp'));

  // instantiate service
  var loginModal;
  beforeEach(inject(function (_loginModal_) {
    loginModal = _loginModal_;
  }));

  it('should do something', function () {
    expect(!!loginModal).to.be.true;
  });

});
