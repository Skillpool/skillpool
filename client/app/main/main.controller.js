'use strict';

(function() {

class MainController {

  constructor(Auth, $rootScope, $state) {

    console.log("asdasd");
    $state.go('main.discover'); 
    
    if(Auth.isLoggedIn()){
      console.log("logged in hai");
       return;
    }
    else
    {
        console.log("logged in nahi hai");
    }     
  }
}

angular.module('skillpoolApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();