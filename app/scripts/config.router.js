'use strict';
var app = angular
  .module('nodejscafe-ui')

  app.constant('appConfig', {ENV:'development',serverUrl:'http://www.nodejscafe.com/',DEBUG:true});
  // app.constant('appConfig', {ENV:'staging',serverUrl:'http://staging.nodejscafe.com/',DEBUG:true});
  // app.constant('appConfig', {ENV:'production',serverUrl:'http://www.nodejscafe.com/',DEBUG:true});

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
