app.controller("expenceList", function ($scope, $http,userIncomeSer, $uibModal, $log, Item) {
    $scope.currentExpenceId;
    $scope.editModalClose;
    $scope.expenceList;
    $scope.getCategory;
  
    $scope.expenceListFuc = function () {

        // $http.get('http://localhost:3000/api/Expenses?filter=' + JSON.stringify({ "include": "category" }))
        //     .then(function (response) {
        //         //  Send totalitems in response also.
        //         $scope.expenceList = response.data.filter(function (item) {
        //             return item.userId == localStorage.getItem('userId')
        //         });
                
        //         $scope.expenceTotalAmt = $scope.expenceList.map(getAllAmt)
               
        //         if($scope.expenceTotalAmt.lenght > 0 &&  $scope.expenceTotalAmt.reduce(getSum)){
        //             $scope.expenceAmtSum = $scope.expenceTotalAmt.reduce(getSum);
        //         }
        //         else{
        //             $scope.expenceAmtSum = $scope.expenceTotalAmt.reduce(getSum);
        //         }
             

                $scope.itemsPerPage = 5;
                $scope.currentPage = 0;
              
                $scope.range = function() {
                  var rangeSize = Math.ceil($scope.total/$scope.itemsPerPage);
                  var ret = [];
                  var start = 0;
              
                  start = $scope.currentPage;
                  if ( start > rangeSize - $scope.pageCount()) {
                    start = rangeSize - $scope.pageCount();
                  }
              
                  for (var i=start; i<start+rangeSize; i++) {
                    ret.push(i);
                  }
                  return ret;
                };
                
                $scope.prevPage = function() {
                  if ($scope.currentPage > 0) {
                    $scope.currentPage--;
                  }
                };
              
                $scope.prevPageDisabled = function() {
                  return $scope.currentPage === 0 ? "disabled" : "";
                };
              
                $scope.nextPage = function() {
                  if ($scope.currentPage < $scope.pageCount() - 1) {
                    $scope.currentPage++;
                  }
                };
              
                $scope.nextPageDisabled = function() {
                  return $scope.currentPage === $scope.pageCount() - 1 ? "disabled" : "";
                };
              
                $scope.pageCount = function() {
                  return Math.ceil($scope.total/$scope.itemsPerPage);
                };
              
              
    $scope.setPage = function(n) {
        
      if (n > 0 && n < $scope.pageCount()) {
        $scope.currentPage = n;
      }
    };
    $scope.$watch("currentPage", function(newValue, oldValue) {

          $scope.expenceList = Item.get(newValue*$scope.itemsPerPage, $scope.itemsPerPage);
          $scope.total = Item.total();
        });


            // })
    };



    //console.log($scope.expenceList)
    function getSum(total, num) {
        return Number(total) + Number(num);
    }

    function getAllAmt(item, index) {
        var itemAmt = [item.amount].join(" ");
        return itemAmt;
    }

    userIncomeSer.getUserIncome().then(function(resp){
        $scope.getUserIncome = resp;
    });

    $scope.expenceListFuc()



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
                console.log(response.data);
                $scope.expenceListFuc();
            })
          
         
    }

    $scope.itemDeleteFuc = function (id) {
        $http.delete('http://localhost:3000/api/Expenses/' + id)
            .then(function (response) {
                console.log($scope);
                $scope.expenceListFuc();
            })

    }

    $scope.openMultipleModals = function (id) {
        $uibModal.open({
          //animation: $ctrl.animationsEnabled,
          ariaLabelledBy: 'modal-title-bottom',
          ariaDescribedBy: 'modal-body-bottom',
          templateUrl: './component/expencesList/expenceEdit.html',
          size: 'md',
          controller: function($scope,$http, $uibModal) {
            $scope.currentExpenceId = id; 

            $http.get('http://localhost:3000/api/Expenses?filter=' + JSON.stringify({ "include": "category" }))
            .then(function(response){
                $scope.getCategoryName = response.data.filter(function(item){
                    return item.id == id;
                })
               $scope.categoryName = $scope.getCategoryName[0].category.name
            })

            // $scope.editModalClose = function(){
            //     $uibModal.dismiss('cancel');
            // } 

          }
        });
      };
   

//$scope.fdsa = $scope.openMultipleModals()

})
