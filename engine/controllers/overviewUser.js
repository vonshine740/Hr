"use strict";

webApp.register.controller("overviewUserCtrl", ['$scope', '$rootScope', '$routeParams', 'getService', function($scope, $rootScope, $routeParams, getService){

        // 获取各个图标的容器
        var genderChart = echarts.init(document.getElementById('UGender'));
        var levelChart = echarts.init( document.getElementById('ULevel') );
        var locChart = echarts.init( document.getElementById('ULocation') );
        var deviChart = echarts.init( document.getElementById('UDevice') );
        var courseChart = echarts.init( document.getElementById('UCourse') );

        // 设置默认参数
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
                data: ['05-12'],
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
                }
            ]
        };

        var location = {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['location']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['多','少'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: false
            },
            series: [
                {
                    name: '用户分布',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#bbceee',
                            borderColor: '#ddd'
                        }
                    }
                }
            ]
        };

        var device = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['pc端', '移动端'],
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
                data: ['05-12'],
                boundaryGap: ['20%', '20%']
            },
            series: [
                {
                    name: 'pc端',
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
                    }
                },
                {
                    name: '移动端',
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
                    }
                }
            ]
        }

        var course = {
            tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            series: [
                {
                    name:'课程分布',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[]
                }
            ]
        };


        // 设置数据存储对象
        $scope.data = {};                       // 页面数据输出
        $scope.response = {};                   // ajax相应的原始数据
        $scope.sgrid = {};                      //动态的silider grid
        $scope.sgrid.loaction = {
            title: ['省份', '用户数'],
            layout: ['div.span3', 'div.span9'],
            total: 1000,
            sort: [false, true],
            data: []
        };

        $scope.sgrid.department = {
            title: ['部门', '用户数'],
            layout: ['div.span3', 'div.span9'],
            total: 1000,
            sort: [false, true],
            data: []
        };

        $scope.sgrid.course = {
            title: ['课程名称', '用户数'],
            layout: ['div.span7', 'div.span5'],
            total: 1000,
            sort: [false, true],
            data: []
        };


        // 先应用参数，显示空图标
        genderChart.setOption(gender);
        genderChart.showLoading();

        levelChart.setOption(level);
        levelChart.showLoading();

        locChart.setOption(location);
        locChart.showLoading();

        deviChart.setOption(device);
        deviChart.showLoading();

        courseChart.setOption(course);
        courseChart.showLoading();

        // 动态获取后台数据
        // 获取数据
        getService.getData('overview/user.json')
              .success(function(data){
                  $scope.response = data.data;
                  $scope.data.uTotal = data.data.uTotal;
                  // 填充数据
                  genderChart.setOption({
                    yAxis: {
                        data: data.data.uGender.date
                    },
                    series: [{
                                data: data.data.uGender.male
                              },{
                                data: data.data.uGender.female
                              }]
                  });
                  genderChart.hideLoading();


                  levelChart.setOption({
                    series: [{
                        data: data.data.uLevel.level1
                    },{
                        data: data.data.uLevel.level2
                    },{
                        data: data.data.uLevel.level3
                    },{
                        data: data.data.uLevel.Pioneer
                    }]
                  });
                  levelChart.hideLoading();


                  locChart.setOption({
                    series: [{
                        data: data.data.uLocation
                    }]
                  });
                  locChart.hideLoading();

                  $scope.sgrid.loaction.total = data.data.uTotal;
                  $scope.sgrid.loaction.data = data.data.uLocation;

                  $scope.sgrid.department.total = data.data.uTotal;
                  $scope.sgrid.department.data = data.data.uDept;

                  deviChart.setOption({
                    yAxis: {
                        data: data.data.uDevice.date
                    },
                    series: [{
                        data: data.data.uDevice.pc
                    },
                    {
                        data: data.data.uDevice.mobile
                    }]
                  });
                  deviChart.hideLoading();

                  courseChart.setOption({
                    series: [{
                        data: data.data.uCourse
                    }]
                  });
                  courseChart.hideLoading();

                  $scope.sgrid.course.total = data.data.cTotal;
                  $scope.sgrid.course.data = data.data.uCourse;

              })
              .error(function(data){
                  alert('error');
              });
}]);

