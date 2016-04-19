'use strict';

class FiltersBarController {
 
  constructor($scope, $http, Filters, $log, Auth) {

  	this.$http = $http;
  	this.$scope = $scope; 
    $scope.genre_list = Filters.filters[0].genres;

    console.log("this is the "+Filters.filters+"filers" );
    $log.info(Filters.filters);

    $scope.addToFilter = function(genre) {

      if(genre.selected == "undefined" || genre.selected == false)
      {
        genre.selected = true;
        Filters.addToFilters(genre, "genres");
      }
      else
      {
        Filters.removeFromFilters(genre, "genres");
        genre.selected = false;
      }
    }

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.$on( 'filters.update', function() {
         $scope.genre_list = Filters.filters[0].genres;
         $log.info("event is triggered and"+$scope.genre_list+"event is here");
       });  
  /*$scope.$watchCollection("genre_list", function(newValue, oldValue) {
     console.log(newValue);
     console.log(oldValue);
     if(oldValue == newValue)
     {

     }
     else
     {
        $scope.filter.genres = $scope.genre_list;
     }
     
   });*/
  }
  $onInit() {
    this.$http.get('/api/genres').then(response => {
      this.$scope.genres = response.data;
      angular.forEach(this.$scope.genres, function(genre, index) {
        genre.selected = false;
      })
    });
  }

}

angular.module('skillpoolApp')
  .controller('FiltersBarController', FiltersBarController);
