'use strict';

angular.module('skillpoolApp', [
  'skillpoolApp.auth',
  'skillpoolApp.admin',
  'skillpoolApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'wu.masonry',
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
