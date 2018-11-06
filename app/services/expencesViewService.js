app.service("expencesViewServ", function($http, $stateParams){
        this.expencesViewList = function (){
        return $http.get('http://localhost:3000/api/Expenses?filter=' + JSON.stringify({ "include": "category" }))
         .then(function (response) {
             
            var expenceList = response.data.filter(function (item) {
                return item.userId == localStorage.getItem('userId') && item.categoryId == $stateParams.categoryId
            });
            return expenceList
        })
    }
        
})