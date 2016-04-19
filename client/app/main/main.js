'use strict';

angular.module('skillpoolApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      });
  });


  angular.module('skillpoolApp').run(['$rootScope', '$state', function($rootScope, $state) {

      $rootScope.$on('$stateChangeStart', function(evt, to, params) {
        if (to.redirectTo) {
          evt.preventDefault();
          $state.go(to.redirectTo, params)
        }
      });
  }]);
