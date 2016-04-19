'use strict';



class loginModalController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state, $scope, $uibModalInstance) {
    var self2 = this;
    self2.Auth = Auth;
    self2.$state = $state;
    console.log("WORKING");

    self2.register = function(form) {
      self2.submitted = true;

      console.log(form)
      if (form.$valid) {
        self2.Auth.createUser({
          name: self2.user.name,
          email: self2.user.email,
          password: self2.user.password
        })
        .then(() => {
          // Account created, redirect to home
          $uibModalInstance.close("jingalala");

          /*self.$state.go('main');*/
        })
        .catch(err => {
          err = err.data;
          self2.errors = {};

          // Update validity of form fields that match the sequelize errors
          console.log(err);
          if (err.name) {
            angular.forEach(err.fields, field => {
              form[field].$setValidity('mongoose', false);
              self2.errors[field] = err.message;
            });
          }
        });
      }
    }
  } 
}




angular.module('skillpoolApp')
  .service('loginModal', function ($uibModal) {
    

  	var service = {
  		loginModal: function() {  			
        $uibModal.open({
  			      templateUrl: 'components/loginModal/loginModal.html',
  			      /*controller: 'ModalInstanceCtrl',*/
  			      /*resolve: {
  			        items: function () {
  			          return $scope.items;
  			        }*/
                controller: loginModalController,
                controllerAs: "vm"
  			    });
  		}

  	}
  	return service;
  });
