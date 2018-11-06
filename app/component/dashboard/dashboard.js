app.controller("dashboard", function ($scope, $http) {
    var getCategories = {};

    var getCategoriesId = {};

    var getExpenceCount = {};

    $http.get("http://localhost:3000/api/Categories")
        .then(function (res) {
            var _res = res;
            console.log(res.data)
            // // Food
            // getCategories.getFood = res.data.filter(function (categoryName) {
            //     return categoryName.name == "food"
            // })

            // getCategoriesId.getFoodId = getCategories.getFood.map(function (categoryId) {
            //     return [categoryId.id].join("")
            // })

            // // Travel
            // getCategories.getTravel = res.data.filter(function (categoryName) {
            //     return categoryName.name == "travel"
            // })

            // getCategoriesId.getTravelId = getCategories.getTravel.map(function (categoryId) {
            //     return [categoryId.id].join("")
            // })

            // // medical
            // getCategories.getMedical = res.data.filter(function (categoryName) {
            //     return categoryName.name == "medical"
            // })

            // getCategoriesId.getMedicalId = getCategories.getMedical.map(function (categoryId) {
            //     return [categoryId.id].join("")
            // })

            // // groceries
            // getCategories.getGrocery = res.data.filter(function (categoryName) {
            //     return categoryName.name == "groceries"
            // })

            // getCategoriesId.getGroceryId = getCategories.getGrocery.map(function (categoryId) {
            //     return [categoryId.id].join("")
            // })

            // // entertainment
            // getCategories.getEntertainment = res.data.filter(function (categoryName) {
            //     return categoryName.name == "entertainment"
            // })

            // getCategoriesId.getEntertainmentId = getCategories.getEntertainment.map(function (categoryId) {
            //     return [categoryId.id].join("")
            // })


            // // Stationery
            // getCategories.getStationery = res.data.filter(function (categoryName) {
            //     return categoryName.name == "entertainment"
            // })

            // getCategoriesId.getStationeryId = getCategories.getStationery.map(function (categoryId) {
            //     return [categoryId.id].join("")
            // })


            $http.get('http://localhost:3000/api/Expenses?filter=' + JSON.stringify({ "include": "category" }))
                .then(function (expResponse) {
                     //console.log(_res.data)
                    _res.data.map(function (item) {
                        getExpenceCount["get" + item.name.toLowerCase()] = expResponse.data.filter(function (exp) {
                            return exp.categoryId == item.id;
                        });
                        console.log(item)
                    });

                    // getExpenceCount.getFood = res.data.filter(function (categoryId) {
                    //     return categoryId.categoryId == getCategoriesId.getFoodId
                    // })


                    // getExpenceCount.getTravel = res.data.filter(function (categoryId) {
                    //     return categoryId.categoryId == getCategoriesId.getTravelId
                    // })


                    // getExpenceCount.getMedical = res.data.filter(function (categoryId) {
                    //     return categoryId.categoryId == getCategoriesId.getMedicalId
                    // })


                    // getExpenceCount.getGrocery = res.data.filter(function (categoryId) {
                    //     return categoryId.categoryId == getCategoriesId.getGroceryId
                    // })

                    // getExpenceCount.getEntertainment = res.data.filter(function (categoryId) {
                    //     return categoryId.categoryId == getCategoriesId.getEntertainmentId
                    // })

                    // getExpenceCount.getStationery = res.data.filter(function (categoryId) {
                    //     return categoryId.categoryId == getCategoriesId.getStationeryId
                    // })


                    //console.log($scope.getGroceriesCountIdItemCount.length)
                    console.log(getExpenceCount);
                    $scope.categories = [
                        ['Food', getExpenceCount.getfood.length],
                        ['Travel', getExpenceCount.gettravel.length],
                        ['Groceries', getExpenceCount.getgroceries.length],
                        ['Medical', getExpenceCount.getmedical.length],
                        ['Entertainment', getExpenceCount.getentertainment.length],
                        ['Stationery', getExpenceCount.getstationery.length]
                    ];
                })

            // console.log($scope.getFoodCountId)
        })



})
