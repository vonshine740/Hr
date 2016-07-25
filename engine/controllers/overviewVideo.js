"use strict";

webApp.register.controller("overviewVideoController", ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){

        // 配置tab切换参数
        $scope.video = [{
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

        // 获取各个图标的容器
        var genderChart = echarts.init(document.getElementById('UGender'));
        var levelChart = echarts.init( document.getElementById('ULevel') );

        // var locChart = echarts.init( document.getElementById('ULocation') );
        var gender = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['男', '女'],
                right: 0
            },
            grid: {
                top: '40px',
                left: '20px',
                right: '20px',
                bottom: '20px',
                containLabel: true
            },
            xAxis:  {
                type: 'value',
                min: '0',
                max: '550',
                axisLine: {
                    show: false
                },
                boundaryGap: [20, 50]
            },
            yAxis: {
                type: 'category',
                data: ['05-17'],
                boundaryGap: ['20%', '20%']
            },
            series: [
                {
                    name: '男',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#7ca3da'
                        }
                    },
                    data: [20]
                },
                {
                    name: '女',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c94956'
                        }
                    },
                    data: [320]
                }
            ]
        };

        var level = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['LV.1', 'LV.2', 'LV.3', 'Pioneer'],
                right: 0,
                selectedMode: 'multiple'
            },
            grid: {
                top: '40px',
                left: '20px',
                right: '20px',
                bottom: '20px',
                containLabel: true
            },
            xAxis:  {
                type: 'value',
                min: '0',
                max: '550',
                axisLine: {
                    show: false
                },
                boundaryGap: [20, 50]
            },
            yAxis: {
                type: 'category',
                data: ['05-17'],
                boundaryGap: ['20%', '20%']
            },
            series: [
                {
                    name: 'LV.1',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#7ca3da'
                        }
                    },
                    data: [12]
                },
                {
                    name: 'LV.2',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#e68417'
                        }
                    },
                    data: [20]
                },
                {
                    name: 'LV.3',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#81a19c'
                        }
                    },
                    data: [50]
                },
                {
                    name: 'Pioneer',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c94956'
                        }
                    },
                    data: [388]
                }
            ]
        };

        // 设置数据存储对象
        $scope.data = {};                       // 页面数据输出
        $scope.response = {};                   // ajax相应的原始数据
        $scope.sgrid = {};                      //动态的silider grid
        $scope.sgrid.score = {
            title: ['姓名', '成绩'],
            layout: ['div.span3', 'div.span9'],
            sort: [false, true],
            data: []
        };

        $scope.sgrid.timelong = {
            title: ['姓名', '观看时长排名'],
            layout: ['div.span3', 'div.span9'],
            total: 1000,
            sort: [false, true],
            data: []
        };

        $scope.sgrid.videos = {
            title: ['视频名称', '观看次数'],
            layout: ['div.span7', 'div.span5'],
            total: 1000,
            sort: [false, true],
            data: []
        };



        genderChart.setOption(gender);
        levelChart.setOption(level);
        // locChart.setOption(location);
}]);

