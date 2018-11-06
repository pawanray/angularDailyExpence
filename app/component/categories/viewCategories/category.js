app.controller("category",function($scope, $http,$state){
    $scope.selectCategory = "expence";
    $scope.getCategories = function(){
        $http.get("http://localhost:3000/api/Categories")
        .then(function(response){
            $scope.filterCategory = response.data.filter(function(type){
                return type.categoryType == $scope.selectCategory;
            })
            console.log($scope.filterCategory)
            $scope.categories =  $scope.filterCategory
        });
    }
    $scope.getCategories()
    $scope.categoryChange = function(){
    $scope.getCategories()
}

})
