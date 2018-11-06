app.controller("login", function ($scope, $http, $state) {

    $scope.login = function () {
        $scope.loginUserData = {}
        var loginUser = {
            username: $scope.username,
            password: $scope.password
        }

        $scope.setLoginDetails = {
            "username": $scope.username,
            "password": $scope.password,
        }

        $http.post("http://localhost:3000/api/AppUsers/login?include=user", loginUser)
            .then(function (response) {
                $scope.loginUserData = response.data;
                console.log($scope.loginUserData)
                if ($scope.username == $scope.loginUserData.user.username) {
                    localStorage.setItem("userLogin", JSON.stringify($scope.setLoginDetails));
                    localStorage.setItem("userId", $scope.loginUserData.user.id);

                    $http.get("http://localhost:3000/api/Incomes")
                        .then(function (IncomesResponse) {
                            console.log(IncomesResponse.data)
                            var user = IncomesResponse.data.filter(function(item){return item.userId == $scope.loginUserData.user.id})
                            if (user.length == 0) {
                                $state.go("income")
                            }

                            else {
                                $state.go("category")
                            }
                        });

                }
            })
    }
})





