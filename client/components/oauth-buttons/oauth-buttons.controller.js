'use strict';

angular.module('skillpoolApp')
  .controller('OauthButtonsCtrl', function($window, $http, Auth) {
    this.loginOauth = function(provider) {
    	console.log($window.location.href);
    	/*$(".modal-content").html('<iframe id = "loginFrame" style="width:100%;height:100%;" frameborder="0" src="/auth/'+ provider+'" />');*/
      /*$window.open("", "", "width=400,height=400,top=50%,left=50%").location.href = '/auth/' + provider;*/
      
      var child_window = $window.open(" ", " ", "width=400,height=400,top=50%,left=50%").location.href = '/auth/' + provider;


      /*$http.get('/auth/'+provider)
         .then(function(response){
            console.log(response);
         });*/

         /*$('#loginFrame').load(function(){
         	Auth.refresh();
         });*/
    };
  });
