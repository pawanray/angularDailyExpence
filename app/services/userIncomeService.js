app.service("userIncomeSer", function ($http) {
    this.getUserIncome = function () {

      return  $http.get("http://localhost:3000/api/Incomes")
            .then(function (response) {
                var userObj = response.data.filter(function (item) {
                    return item.userId == localStorage.getItem("userId")

                })
              
                return userObj[0].amount;
            })
    }
})