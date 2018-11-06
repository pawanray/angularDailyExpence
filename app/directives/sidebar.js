app.directive("sidebar",function(){
    return{
        templateUrl:"directives/sidebar.html",
        restrict : "E"
    }
})


app.controller("sidebar",function($scope){
    usernameStr = localStorage.getItem("userLogin");
    userLogin = JSON.parse(usernameStr);
    var getUser =  userLogin.username;
    $scope.getUserName =getUser.replace("."," ");
    var initialMenuState = {
        "category":false,
        "expence":false,
        "income":false
    }
   $scope.submenuObj =Object.assign({},initialMenuState);
    $scope.toggleSubmenu = function(menuName){
        // var submenuArr;
        // submenuArr = $scope.submenuObj.filter(function(keyName){
        //     console.log(keyName)
        //        var sa =  Object.keys(keyName).map(function(item){
        //            console.log(item)
        //         return  {[item]:item == menuName}
        //        })
        //      var dfsa = sa
        //   console.log(dfsa)
        // })

        $scope.submenuObj = Object.assign({},initialMenuState);
        $scope.submenuObj[menuName]= !$scope.submenuObj[menuName];
    }

})