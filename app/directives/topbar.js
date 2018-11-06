app.directive("topbar",function(){
    return {
        restrict : "E",
        templateUrl : "./directives/topbar.html"
    };
})

app.controller("topbar",function($scope, userIncomeSer,$http){
    usernameStr = localStorage.getItem("userLogin");
    userLogin = JSON.parse(usernameStr);
    var getUser =  userLogin.username;
    $scope.getUserName =getUser.replace("."," ");
    $scope.getUserIncome;
    $scope.balanceAmt;

    userIncomeSer.getUserIncome().then(function(resp){
        $scope.getUserIncome = resp;
    });

    $http.get("http://localhost:3000/api/Expenses")
    .then(function(response){
       $scope.getUserId = response.data.filter(function(userId){
           return userId.userId == localStorage.getItem('userId')
       })

       $scope.getUserAmt = $scope.getUserId.map(function(amt){
        return [amt.amount].join('') 
       })
       $scope.getBalanceAmt = $scope.getUserAmt.reduce(function(total,num){
        return parseInt(total) + parseInt(num)
       })
       
       $scope.balanceAmt =  $scope.getUserIncome - $scope.getBalanceAmt;


       function dateToString(date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var dateOfString = (("" + day).length < 2 ? "0" : "") + day + "/";
        dateOfString += (("" + month).length < 2 ? "0" : "") + month + "/";
        dateOfString += date.getFullYear();
        return dateOfString;
    }
    
       var currentdate = new Date();
       var datetime = "";
       datetime += dateToString(currentdate );
    //    datetime += + currentdate.getHours() + ":"
    //                + currentdate.getMinutes() + ":"
    //                + currentdate.getSeconds();


       var date = new Date();
       var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
       var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
       var _month=lastDay.getMonth() + 1;
       var _day=firstDay.getDay() + 1;
       _month=_month>=10?_month:"0"+_month;
       _day=_day>=10?_day:"0"+_day;
       
       var lastDayWithSlashes = (lastDay.getDate()) + '/' + (_month) + '/' + lastDay.getFullYear();
       var firstDayWithSlashes = (_day) + '/' + (_month) + '/' + firstDay.getFullYear();
       console.log(lastDayWithSlashes + 1 )
   
       if(datetime == firstDayWithSlashes){
           debugger
        $scope.balanceAmt +=  $scope.getUserIncome ;
        //$scope.balanceAmt = 0;
         
       }
    
       
       //console.log($scope.balanceAmt)
     
    })
    
 
   


})