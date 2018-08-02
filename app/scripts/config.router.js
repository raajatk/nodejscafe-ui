'use strict';
var app = angular
  .module('nodejscafe-ui')

  // app.constant('appConfig', {
  //   environment: "development",
  //   serverUrl:'http://localhost:3000/',
  //   DEBUG: true
  // })

  app.constant('appConfig', {
    environment: "production",
    serverUrl:'http://www.nodejscafe.com/',
    DEBUG: false
  })

  // app.constant('appConfig', {
  //   environment: "staging",
  //   serverUrl:'http://www.nodejscafe.com:3000/',
  //   DEBUG: true
  // })

  app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: './views/home.html'
    }).when('/post/:postId', {
        templateUrl: './views/post.html',
        controller: 'postController'
    }).otherwise({
        redirectTo: "/"
    });
  });
