'use strict';

describe('Service: xtify', function () {

  // load the service's module
  beforeEach(module('pocApp'));

  // instantiate service
  var xtify;
  beforeEach(inject(function (_xtify_) {
    xtify = _xtify_;
  }));

  it('should do something', function () {
    expect(!!xtify).toBe(true);
  });

});
