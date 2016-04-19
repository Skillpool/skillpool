'use strict';

angular.module('skillpoolApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.discover', {
        url: 'discover',
        template: '<discover></discover>'
      });
  });