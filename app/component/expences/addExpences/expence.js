app.controller("expence",function($scope,$state,$http, $stateParams){
$scope.categoryId =  $stateParams.id;
$scope.categoryName =  $stateParams.name;
$scope.userId = localStorage.getItem("userId");

$scope.expenceAddFuc= function(){
    $scope.expenceObj = {
    amount:$scope.expAmount,
    transactionDate:$scope.dt,
    subCategoryName:$scope.expCategoryName,
    categoryId:$scope.categoryId,
    userId:$scope.userId
}

$http.get("http://localhost:3000/api/Expenses")
    .then(function(response){
            var userId = response.data.filter(function(item){
                return item.userId ===  localStorage.getItem('userId');
            })
        $http.post("http://localhost:3000/api/Expenses",$scope.expenceObj)
      .then(function(response){
          console.log($scope.dt)
          debugger
        $scope.expAmount = undefined;
        $scope.expCategoryName = undefined;
        $state.go("categoryExpences")
    })
            
    })

}


})