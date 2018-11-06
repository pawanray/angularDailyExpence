app.controller("addCategory",function($http, $scope, $state){
    $scope.addCategory = function(){
var categoryObj = {
  name: $scope.categroyName,
  iconUrl: $scope.image,
  categoryType:$scope.categoryType,
}


$http.post("http://localhost:3000/api/Categories",categoryObj)
    .then(function(response){
        $state.go('category')
        console.log(response.data)
    })    
}


})
