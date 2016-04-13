'use strict';

angular.module('skillpoolApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('discover', {
        url: '/discover',
        template: '<discover></discover>',
        resolve: {
        	mediaDetails: function($http) {
        		return $http.get('/api/media').then(response => {
        			return response.data.$promise;
        		    });
        	}
        },
      });
  });

  console.log(angular.module('skillpoolApp'));