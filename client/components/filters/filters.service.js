'use strict';

angular.module('skillpoolApp')
  .service('Filters',['$rootScope', function ( $rootScope ) {
  var service = {

  	filters: [{ "genres": []}],

  	addToFilters: function( filter , filter_type ) {
      console.log(service.filters[0].genres);
  		service.filters[0].genres.push(filter);
      $rootScope.$broadcast( 'filters.update' );
  	},

    removeFromFilters: function( filter, filter_type) {
        var index = service.filters[0].genres.indexOf(filter);

      if (-1 !== index) {
            service.filters[0].genres.splice(index, 1);
            $rootScope.$broadcast( 'filters.update' );
          }
    }
  }

  return service;
    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
