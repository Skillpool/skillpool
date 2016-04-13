'use strict';
(function(){

class DiscoverComponent {
  constructor($scope, $http, $timeout) {

    self = this;
  	self.$http = $http;
    self.mediaDetails = false;
    var offset = 0;

    this.loadmore = function() {
      offset += 10;
      this.$http.get('/api/media/'+offset).then(response => {

        angular.forEach(response.data.rows, function(row, index) {
                self.mediaDetails.push(row);
        });

        console.log(self.mediaDetails);

      });
    }

    /*$(window).scroll(function () {
        if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
          $(".load-more-button").click();
        }
     });*/

  }

  $onInit() {
    var offset = 0;
    this.$http.get('/api/media/'+offset).then(response => {
      this.mediaDetails = response.data.rows;
      console.log(this.mediaDetails);

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
