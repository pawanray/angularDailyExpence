app.factory( 'myData', function($http,$stateParams) {
  var data = [];
  $http.get('http://localhost:3000/api/Expenses?filter=' + JSON.stringify({ "include": "category" }))
  .then(function (response) {
    data = response.data.filter(function (item) {
      return item.userId == localStorage.getItem('userId') && item.categoryId == $stateParams.categoryId
    });
    console.log(data)
  })

  return {
    get: function(offset, limit) {
      return data.slice( offset, offset+limit );
    },
    count: function() {
      return data.length;
    }
  };
});

