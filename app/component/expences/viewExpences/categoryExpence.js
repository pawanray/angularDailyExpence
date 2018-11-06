app.controller("categoryExpences",function($http,$scope,$state,$stateParams,myData, expencesViewServ){

    // view Expence list 
    $scope.expenceViewList
    $scope.viewExpenceList = function(){
        expencesViewServ.expencesViewList().then(function(resp){
            $scope.expenceViewList = resp;
            $scope.amount = $scope.expenceViewList.map(function(expencesAmount){
               return [expencesAmount.amount].join('')
            })

           $scope.getExpenceAmt= $scope.amount.reduce(function(totalAmt,val){
             return parseInt(totalAmt) + parseInt(val)
            })


            console.log($scope.expenceViewList)
            
            $scope.numPerPage = 5;
            $scope.noOfPages = Math.ceil(myData.count() / $scope.numPerPage);
            $scope.currentPage = 1;
          
            $scope.setPage = function () {
                debugger
              $scope.expenceViewList = myData.get( ($scope.currentPage - 1) * $scope.numPerPage, $scope.numPerPage );
            };
            
            $scope.$watch( 'currentPage', $scope.setPage );
            // if($scope.amount.lenght > 0 &&  $scope.amount.reduce(getSum)){
            //     $scope.getExpenceAmt = $scope.getExpenceAmt.reduce(getSum);
            // }
            // else{
            //     $scope.getExpenceAmt = $scope.amount.reduce(getSum);
            // }


         });

    }

    $scope.viewExpenceList();
    // expence Item Delete
    $scope.itemDeleteFuc = function (id) {
        $http.delete('http://localhost:3000/api/Expenses/' + id)
            .then(function (response) {
                $scope.viewExpenceList()
            })
    }
    // expence item Edit
        $scope.expenceEditFuc = function () {
                $scope.getCategory=$scope.expenceList.filter(function(item){
                    return item.id == $scope.currentExpenceId;
                })[0];
               console.log("fdas" + $scope.getCategory);
               var expenceEditObj = {
                amount:$scope.itemPrice,
                subCategoryName:$scope.itemName,        
                categoryId:$scope.getCategory.categoryId,
                userId:localStorage.getItem("userId"),
                }
        
                $http.put('http://localhost:3000/api/Expenses/'+ $scope.currentExpenceId , expenceEditObj)
                    .then(function (response) {
                        $scope.viewExpenceList()
                    })
            }
        
        


// $scope.$watch("currentPage", function(newValue, oldValue) {
// $scope.expenceList = Item.get(newValue*itemsPerPage, itemsPerPage);
// total = Item.total();
// console.log("fdsa" + $scope.expenceList)
// });


//console.log(Item.paginationItem().range())



// console.log(Item.paginationItem().then(function(resp){
//     console.log(resp)
// }))

})