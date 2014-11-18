'use strict';

angular.module('pocApp')
  .controller('ReactorresetCtrl', function ($scope) {
    $scope.message = 'Hello';

    Reactor.reset();
  });
