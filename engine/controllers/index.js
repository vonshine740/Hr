'use strict';

webApp.register.controller('indexCtrl', ['$scope', '$rootScope', '$routeParams', 'indexService', function($scope, $rootScope, $routeParams, indexService){

    // 声明存放首页数据的对象
    $scope.index = {};


    // 初始化各个表格
    var satisfy = echarts.init( document.getElementById('satisfy') );   //学员满意度
    var complete = echarts.init( document.getElementById('complete') );     //学员满意度
    var effect = echarts.init( document.getElementById('effect') );     //部门经理肯定
    var Ccount = echarts.init( document.getElementById('Ccount') );     //课程情况统计
    var Ccount = echarts.init( document.getElementById('Ccount') );     //课程情况统计
    var registered = echarts.init( document.getElementById('registered') );     //注册用户
    var level = echarts.init( document.getElementById('level') );     //用户级别分布

    // 圆环型图标公用配置
    var circle = {
            legend: {
                orient: 'vertical',
                x: 'center',
                show: false,
                data:[]
            },
            grid:{
                width: '100%',
                height: '100%',
            },
            series: [
                {
                    name:'total, current',
                    type:'pie',
                    radius: ['70%', '75%'],
                    avoidLabelOverlap: true,
                    hoverAnimation: false,
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#7ca3da'
                        }
                    },
                    data:[]
                }
            ]
        };
    // 课程情况统计
    var countOpt = {
            title : {
                text: '趋势图',
            },
            grid: {
                bottom: 80
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
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 60,
                    end: 80
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 60,
                    end: 80
                }
            ],
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLine: {onZero: false},
                    data : []
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    max: 500
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

    // 用户级别分布
    var levelOpt = {
            title : {
                show: false
            },
            tooltip : {
                show: false
            },
            legend: {},
            toolbox: {
                show : false
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['0','1','2','3','4','5','6','7','8'],
                    axisLine: {
                        lineStyle:{
                            opacity: 0,
                            color: '#f00',
                            width: 0
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine: {
                        show: false
                    },
                    show: false
                }
            ],
            series : [
                {
                    name:'用户数',
                    type:'bar',
                    stack: true,
                    barWidth: 8,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [1000, 1000, 1000, 1000]
                        }
                    },
                    data:[52, 102, 152, 210, 112, 90, 195, 175, 210],
                }
            ]
        };


    // 配置每一个的基本配置
    var satisfyOpt = angular.extend(circle, {});
    var completeOpt = angular.extend(circle, {});
    var effectOpt = angular.extend(circle, {});
    var regOpt = angular.extend(circle, {});

    // console.log(satisfy);
    // 先应用参数
    satisfy.setOption(satisfyOpt);
    satisfy.showLoading();

    complete.setOption(completeOpt);
    complete.showLoading();

    effect.setOption(effectOpt);
    effect.showLoading();

    Ccount.setOption(countOpt);
    Ccount.showLoading();

    registered.setOption(regOpt);
    registered.showLoading();

    level.setOption(levelOpt);
    // level.showLoading();


    // 获取数据
    indexService.getData('grid.json')
                .success(function(data){
                    // 填入数据
                    satisfy.setOption({
                        series: [{
                            data: [
                                {value:data.data.summary.satisfy.total, name:'total'},
                                {value:data.data.summary.satisfy.current, name:'current'}
                            ]
                        }]
                    });
                    satisfy.hideLoading();
                    $scope.index.satisfy = parseInt(3, 10);

                    complete.setOption({
                        series: [{
                            data: [
                                {value:data.data.summary.complete.total, name:'total'}
                            ]
                        }]
                    });
                    complete.hideLoading();
                    $scope.index.complete = 100;

                    effect.setOption({
                        series: [{
                            data: [
                                {value:data.data.summary.effect.total, name:'total'},
                                {value:data.data.summary.effect.current, name:'current'}
                            ]
                        }]
                    });
                    effect.hideLoading();
                    $scope.index.effect = 98;

                    Ccount.setOption({
                        xAxis : [
                            {
                                data : data.data.Ccount.date
                            }
                        ],
                        series: [
                            {
                                data: data.data.Ccount.data
                            }
                        ]
                    });
                    Ccount.hideLoading();

                    registered.setOption({
                        series: [{
                            data: [
                                {value:data.data.summary.satisfy.total, name:'total'},
                                {value:data.data.summary.satisfy.current, name:'current'}
                            ]
                        }]
                    });
                    registered.hideLoading();
                    $scope.index.users = 741;

                })
                .error(function(){
                    alert('error');
                });

}]);
