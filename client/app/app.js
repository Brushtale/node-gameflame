'use strict';

angular.module('nodeGameflameApp', [
  'nodeGameflameApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'mm.foundation',
  'mm.foundation.offcanvas',
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .config(function(appConfig) {
    console.log('CONFIGURING FIREBASE',appConfig)
    // Firebase config
    var config = {
      apiKey: appConfig.apiKey,
      authDomain: appConfig.authDomain,
      databaseURL: appConfig.databaseURL,
      storageBucket: appConfig.storageBucket,
    };
    firebase.initializeApp(config);
    console.log('done!',config)
  });
