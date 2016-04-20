'use strict';
(function(){

class DiscoverComponent {
  constructor($scope, $http, $rootScope, $location, Modal, $uibModal, loginModal, Auth, $cookies, $window) {

    self = this;
  	self.$http = $http;
    self.mediaDetails = false;
    self.Auth = Auth
    self.loginModal = loginModal;
    var offset = 0;

    this.loadmore = function() {
      offset += 10;
      this.$http.get('/api/media/'+offset).then(response => {

        angular.forEach(response.data.rows, function(row, index) {
                self.mediaDetails.push(row);
        });


      });
    }

    this.refresh = function() {
      $rootScope.$broadcast('masonry.reload');
      /*$uibModal.open({
                  templateUrl: 'app/loginModal/loginModal.html',
                  backdrop: true,
                  scope: $scope,
              });*/

              console.log(self.loginModal);

     /*$scope.modal("followwwwww");*/
     self.loginModal.loginModal();
    }

    this.another = function() {
      console.log($window.opener)
      Auth.refresh();
      self.getCurrentUser = self.Auth.getCurrentUser;
      console.log($cookies.getAll());
    }

    self.imgLoadedEvents = {

            always: function(instance) {

            },

            done: function(instance) {
              console.log("afdkaldsjfadsf");
                $rootScope.$broadcast('masonry.reload');

                angular.element(instance.elements[0]).addClass('loaded');
            },

            fail: function(instance) {

                // Do stuff
            }
        }

        $window.refreshAuth = function(){
          Auth.refresh();
        }
        
        if($window.opener != null) {
          console.log($window.opener);
          $window.opener.refreshAuth();
        }

    /*$scope.modal=Modal.confirm.askToLogin(function(message) { // callback when modal is confirmed
            $location.path("/login"); //will redirect to login page, make sure your controller is using $location
          });*/





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
