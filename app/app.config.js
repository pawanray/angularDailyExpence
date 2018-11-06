app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
    .state('login',{
        url:"/login",
        templateUrl:"./component/users/login/login.html",
        controller:"login"

    })
      .state('register',{
        url:"/register",
        templateUrl:"./component/users/userRegister/userRegister.html",
        controller:"userRegister"

    })

      .state('income',{
        url:"/income:id",
        templateUrl:"./component/incomes/income/income.html",
        controller:"income"

    })
    .state('category',{
        url:"/category",
        templateUrl:"./component/categories/viewCategories/category.html",
        controller:"category"

    })

       .state('addCategory',{
        url:"/addCategory",
        templateUrl:"./component/categories/addCategory/addCategory.html",
        controller:"addCategory",

    })

    .state('expence',{
        url:"/expence/:id/:name",
        templateUrl:"./component/expences/addExpences/expence.html",
        controller:"expence",

    })
    
        .state('expenceList',{
        url:"/expenceList",
        templateUrl:"./component/expences/totalViewExpences/expenceList.html",
        controller:"expenceList",

    })
    
    .state('categoryExpences',{
        url:"/categoryExpences/:categoryId",
        templateUrl:"./component/expences/viewExpences/categoryExpence.html",
        controller:"categoryExpences",

    })
    
    .state('dashboard',{
        url:"/dashboard",
        templateUrl:"./component/dashboard/dashboard.html",
        controller:"dashboard",

    })


})