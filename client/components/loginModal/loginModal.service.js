'use strict';



class loginModalController {
  //start-non-standard
  
  //end-non-standard

  constructor(Auth, $state, $scope, $uibModalInstance) {
    var self2 = this;
    self2.user = {};
    self2.errors = {};
    self2.submitted = false;
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
          $uibModalInstance.close("");

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


    self2.login = function(form) {
      console.log(form);
      self2.submitted = true;

      if (form.$valid) {
        console.log("kuch toh ho");
        self2.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          console.log("asdasd");
          $uibModalInstance.close("");
          // Logged in, redirect to home
          /*this.$state.go('main');*/
        })
        .catch(err => {
          console.log("error hai");
          self2.errors.other = err.message;
        });
      }
      else
      {
        console.log("form not valid bitch");
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
