app.controller("income",function($scope,$http,$state){

    $scope.userIncome
    $scope.incomeFuc = function(){
        $scope.userIncomeObj = {
            amount:$scope.userIncome,
            userId:localStorage.getItem('userId')
        }
        $http.post("http://localhost:3000/api/Incomes",$scope.userIncomeObj)
        .then(function(response){
            console.log(response.data)
         $scope.userIncome = undefined;
          $state.go("category")
        })
        
         //localStorage.setItem("UserIncome", $scope.userIncome);
  
    }

})