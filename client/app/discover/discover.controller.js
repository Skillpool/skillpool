'use strict';
(function(){

class DiscoverComponent {
  constructor($scope, $http) {

  	this.$http = $http;
    this.mediaDetails = [];

  }

  $onInit() {
    this.$http.get('/api/media').then(response => {
      this.mediaDetails = response.data;
    });
  }


}

angular.module('skillpoolApp')
  .component('discover', {
    templateUrl: 'app/discover/discover.html',
    controller: DiscoverComponent,
    controllerAs: 'discover',
  });

})();
