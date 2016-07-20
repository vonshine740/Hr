'use strict';

webApp.register.controller('overviewCtrl', ['$scope', '$rootScope', '$routeParams', 'getService', function($scope, $rootScope, $routeParams, getService){

    // 配置tab切换参数
    $scope.tabTPOptions = [{
        label: "培训项目 - A",
        type: "tab",
        action: function(){
            $scope.switcher.tProject = 'A';
            $scope.data.tProject = $scope.response.tProject[$scope.switcher.tProject];
        }
    },{
        label: "培训项目 - B",
        type: "tab",
        action: function(){
            $scope.switcher.tProject = 'B';
            $scope.data.tProject = $scope.response.tProject[$scope.switcher.tProject];
        }
    }];

    $scope.tabVSOptions = [{
        label: "培训项目 - A",
        type: "tab",
        action: function(){
            $scope.switcher.vStudy = 'A';
            $scope.data.vStudy = $scope.response.vStudy[$scope.switcher.vStudy];
        }
    },{
        label: "培训项目 - B",
        type: "tab",
        action: function(){
            $scope.switcher.vStudy = 'B';
            $scope.data.vStudy = $scope.response.vStudy[$scope.switcher.vStudy];
        }
    }];

    // 设置数据存储对象
    $scope.data = {};                       // 页面数据输出
    $scope.switcher = {};                   // tab切换存储的中间值对象
    $scope.switcher.tProject = 'A';
    $scope.switcher.vStudy = 'A';
    $scope.response = {};                   // ajax相应的原始数据

    // 获取数据
    getService.getData('overview/index.json')
              .success(function(data){
                  $scope.response = data.data;
                  $scope.data.total = $scope.response.total;
                  $scope.data.tProject = $scope.response.tProject[$scope.switcher.tProject];
                  $scope.data.vStudy = $scope.response.vStudy[$scope.switcher.vStudy];
              })
              .error(function(data){
                  alert('error');
              });

}]);
