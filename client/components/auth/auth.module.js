'use strict';

angular.module('skillpoolApp.auth', [
  'skillpoolApp.constants',
  'skillpoolApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
