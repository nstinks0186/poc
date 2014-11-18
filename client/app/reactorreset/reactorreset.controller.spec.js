'use strict';

describe('Controller: ReactorresetCtrl', function () {

  // load the controller's module
  beforeEach(module('pocApp'));

  var ReactorresetCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReactorresetCtrl = $controller('ReactorresetCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
