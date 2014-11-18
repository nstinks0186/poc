'use strict';

angular.module('pocApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reactorreset', {
        url: '/reactorreset',
        templateUrl: '../app/reactorreset/reactorreset.html',
        controller: 'ReactorresetCtrl'
      });
  });