'use strict';

angular.module('nodeGameflameApp', [
  'nodeGameflameApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'mm.foundation',
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
