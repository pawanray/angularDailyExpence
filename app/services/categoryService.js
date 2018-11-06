
app.factory('categoryService', function($http) {
    var response
  var _categoryService = $http.get("http://localhost:3000/api/Categories")
 .then(function(response){
//   $scope.categories=response.data

 })
})
