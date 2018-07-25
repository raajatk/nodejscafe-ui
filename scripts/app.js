var app = angular.module("nodejscafe-ui",['ngResource','ngSanitize','ngRoute']);

app.controller("appCtrl", ["$scope","CommonService","$http","$location",function ($scope,CommonService,$http,$location) {
  console.log("THE MAIN CONTROLLER CALLED.");
      $scope.data="HOLA";
      $scope.resData = "<p>hello this is demo code</p>"
      var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            };

      $scope.skip=0;
      $scope.limit=4;
      $scope.blogs=[];
      $scope.totalBlogs=0;

      var init = function(){
        console.log("The skip limit values are ",$scope.skip," ",$scope.limit);
        getBlogs();
        getTotalNoOfBlogs();
      }

      var getBlogs = function(){
        $http({
          url:"http://localhost:3000/api/v1.0/nodejscafe/get/blogs/"+$scope.skip+"/"+$scope.limit,
          method:"GET",
          headers:{"Content-Type":"application/json"}
        }).then(function(response){
          console.log("the res is ",response.data.object);
          $scope.blogs = response.data.object;
        })
      }

      var getTotalNoOfBlogs = function(){
        $http({
          url:"http://localhost:3000/api/v1.0/nodejscafe/get/blogs-count",
          method:"GET",
          headers:{"Content-Type":"application/json"}
        }).then(function(response){
          console.log("the res is ",response);
          $scope.totalBlogs = response.data.object.totalNumberOfBlogs;
          // $scope.totalBlogs
        })
      }

      $scope.onClickOlderPost = function(){
        $scope.skip = $scope.skip + 4;
        $scope.limit = $scope.limit + 4;
        //getBlogs();
        if($scope.limit>$scope.totalBlogs){
          $scope.limit = $scope.totalBlogs;
        }
        console.log("SKIP LIMIT is ",$scope.skip," ",$scope.limit);
        if($scope.limit>$scope.skip){
          console.log("GET BLOG COUNT HIT");
          getBlogs();
        }
      }

      $scope.onPostClick = function(postId){
        console.log("the post id is ",postId);
        $location.path("/post/"+postId)
      }

      init();

}]);
