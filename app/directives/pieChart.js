app.directive('hcPie', function () {
    return {
      restrict: 'C',
      replace: true,
      scope: {
        items: '='
      },
      controller: function ($scope, $element, $attrs) {
        console.log(2);
  
      },
      template: '<div id="container" style="margin: 0 auto">not working</div>',
      link: function (scope, element, attrs) {
        console.log(3);
        var chart = new Highcharts.Chart({
          chart: {
            renderTo: 'container',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
          },
          title: {
            text: 'Categories Expences Counts Pie Chart'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            percentageDecimals: 1
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                color: '#000000',
                connectorColor: '#000000',
                formatter: function () {
                  return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                }
              }
            }
          },
          series: [{
            type: 'pie',
            name: 'Browser share',
            data: scope.items
          }]
        });
        scope.$watch("items", function (newValue) {
          chart.series[0].setData(newValue, true);
        }, true);
        
      }
    }
  });