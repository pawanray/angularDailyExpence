app.controller("userRegister",function($scope,$http){

    $scope.registerFuc = function(){
    $scope.userObj = {
        username:$scope.userName,
        email:$scope.userEmail,
        password:$scope.userPassword
    }

    $http.post("http://localhost:3000/api/AppUsers", $scope.userObj)
    .then(function(response){
        console.log(response.data)
        alert("User Successfuly Register")
        $scope.userName = undefined;
        $scope.userEmail = undefined;
        $scope.userPassword = undefined;
    }(function(error){
          alert("Something Went Wrong")
    }))
    }
})