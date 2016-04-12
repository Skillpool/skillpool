'use strict';

angular.module('skillpoolApp')
  .directive('filtersBar', function () {
    return {
      templateUrl: 'app/filtersBar/filtersBar.html',
      restrict: 'EA',
      controller: 'FiltersBarController',
      link: function (scope, element, attrs) {
      }
    };
  });
