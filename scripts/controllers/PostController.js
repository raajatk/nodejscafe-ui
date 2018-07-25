var app = angular.module("nodejscafe-ui");

app.controller("postController", ["$scope","$routeParams","$http", function ($scope, $routeParams, $http) {
    console.log("HOLA inside the POST controller ",$routeParams.postId);

    var getBlogById = function(blogId){
      $http({
        url:"http://localhost:3000/api/v1.0/nodejscafe/get/blogById/"+blogId,
        method:"GET",
        headers:{"Content-Type":"application/json"}
      }).then(function(response){
        console.log("the res is ",response.data.object);
        $scope.blog = response.data.object;
      })
    }

    var init = function(){
      getBlogById($routeParams.postId);
    }

    init();

}])
