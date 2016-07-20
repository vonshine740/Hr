"use strict";

webApp.register.controller("overviewTrainingCtrl", ['$scope', '$rootScope', '$routeParams', 'getService', 'NgTableParams', function($scope, $rootScope, $routeParams, getService, NgTableParams){

    // 配置tab切换参数
    $scope.training = [{
        label: "培训项目 - A",
        type: "tab",
        action: function(){
            $scope.switcher.training = 'A';
            $scope.data.training = $scope.response.training[$scope.switcher.training];
        }
    },{
        label: "培训项目 - B",
        type: "tab",
        action: function(){
            $scope.switcher.training = 'B';
            $scope.data.training = $scope.response.training[$scope.switcher.training];
        }
    }];

    $scope.sortData = [{
        label: "已完成课程",
        type: "tab",
        action: function(){
            $scope.switcher.training = 'A';
            $scope.data.training = $scope.response.training[$scope.switcher.training];
        }
    },{
        label: "未完成课程",
        type: "tab",
        action: function(){
            $scope.switcher.training = 'B';
            $scope.data.training = $scope.response.training[$scope.switcher.training];
        }
    },{
        label: "参培人数",
        type: "tab",
        action: function(){
            $scope.switcher.training = 'B';
            $scope.data.training = $scope.response.training[$scope.switcher.training];
        }
    },{
        label: "累计完成总量",
        type: "tab",
        action: function(){
            $scope.switcher.training = 'B';
            $scope.data.training = $scope.response.training[$scope.switcher.training];
        }
    }];

    var sortGrid = echarts.init(document.getElementById('sortData'));
    var sortData = {
            title : {
                text: '趋势图',
                textStyle: {
                   color: '#95a2aa',
                   fontSize: 14,
                   fontWeight: 'normal'
                },
                left: 70,
                top: 20
            },
            grid: {
                top: 60,
                bottom: 55
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                }
            },
            legend: {
                show: false
            },
            xAxis : [
                {
                    type : 'category',
                    name: '已完成课程',
                    nameGap: 15,
                    nameLocation: 'middle',
                    nameTextStyle: {
                        fontSize: 14,
                        color: '#a0a0a0'
                    },
                    boundaryGap : false,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                                color: '#f4f9f9'
                        }
                    },
                    data : []
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    max: 500,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                                color: '#dbe9ed'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#4c616b',
                            fontSize: 10,
                            fontWeight: 'bold',
                            fontFamily: '微软雅黑'
                        }
                    }
                }
            ],
            series: [
                {
                    name:'流量',
                    type:'line',
                    hoverAnimation: false,
                    areaStyle: {
                        normal: {}
                    },
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: []
                }
            ]
    };

    sortGrid.setOption(sortData);
    sortGrid.showLoading();

    // 定义参数
    $scope.switcher = {};       // switcher 的数据集合
    $scope.switcher.training = "A";
    $scope.data = {};           // 页面输出数据
    $scope.response = {};       // ajax 相应的原始数据

    // 最后表格配置
    var simpleList = [{
        time: 12,
        finished: true
    }];
    var self = this;
    console.log(self);
    self.tableParams = new NgTableParams({}, {
      dataset: simpleList
    });


    // 获取数据
    getService.getData('overview/training.json')
              .success(function(data){
                  $scope.response = data.data;
                  $scope.data.training = data.data.training[$scope.switcher.training];
                  $scope.data.kpi = data.data.kpi;

                  // 图标应用数据

              })
              .error(function(data){
                  alert('error');
              });

}]);

