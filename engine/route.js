"use strict";

webApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({enabled:true,rewriteLinks:true});
   
    function loader(arrayName)
    {
        return {
            load: function($q){
                    var deferred = $q.defer(),
                    map = arrayName.map(function(name) {
                        return loadScript('engine/controllers/'+name+".js");
                    });

                    $q.all(map).then(function(r){
                        deferred.resolve();
                    });

                    return deferred.promise;
            }
        };
    }

    // 路由表
    $routeProvider 
        // 首页
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'indexCtrl',
            resolve: loader(['index'])
        })
        // 按照原型的思路划分
        // 参培数据总览
        .when('/overview', {
            // 总览首页
            templateUrl: 'views/overview/index.html',
            controller: 'overviewCtrl',
            resolve: loader(['overview'])
        })
        .when('/overview/user', {
            // 用户数据分析
            templateUrl: 'views/overview/user.html',
            controller: 'overviewUserCtrl',
            resolve: loader(['overviewUser'])
        })
        .when('/overview/training', {
            // 培训数据分析
            templateUrl: 'views/overview/training.html',
            controller: 'overviewTrainingCtrl',
            resolve: loader(['overviewTraining'])
        })
        .when('/overview/video', {
            // 视频学习数据分析
            templateUrl: 'views/overview/video.html',
            controller: 'overviewVideoController',
            resolve: loader(['overviewVideo'])
        })
        // 培训跟踪定制
        .when('/training', {
            // 培训分总定制首页
            templateUrl: 'views/training/index.html'
        })
        .when('/training/progress', {
            // 培训跟踪定制 -- 学习进度
            templateUrl: 'views/training/progress.html',
            controller: 'trainingProgressController',
            resolve: loader(['trainingProgress'])
        })
        .when('/training/replay', {
            // 培训跟踪定制 -- 课堂实录回放
            templateUrl: 'views/training/replay.html',
            controller: 'trainingReplayController',
            resolve: loader(['trainingReplay'])
        })
        .when('/training/service', {
            // 培训跟踪定制 -- 客户服务数据
            templateUrl: 'views/training/service.html',
            controller: 'trainingServiceController',
            resolve: loader(['trainingService'])
        })
        // 课程开发定制
        .when('/customized', {
            // 培训分总定制首页
            templateUrl: 'views/customized/index.html'
        })
        // 系统管理
        .when('/system/acount/:part=?', {
            templateUrl: function(route){
                return 'views/system/'+route.part+'.html';
            },
            controller: 'acountCtrl',
            resolve: loader(['acount']),
            redirectTo: function(route){
                var avaliable = ['pwd', 'info', 'manage', 'ulist'];
                var res = $.inArray(route.part, avaliable);
                if(res<0) return '/error';
            }
        })
        .when('/system/author', {
            templateUrl: 'views/system/author.html'
        })
 

        .when('/error', {
            templateUrl: 'views/error.html',
            controller: 'errorController',
            resolve: loader(['error'])
        })
        .when('/url', {
            templateUrl: 'url.html'
        })
        .when('/test/:id?', {
            templateUrl: 'views/test.html',
            controller: 'testCtrl',
            resolve: loader(['test'])
        })
        .when('/register/:page?', {
            templateUrl: 'views/register/step1.html',
            //controller: '',
            //resolve: loader(['test'])
        })
        .when('/demo', {
            templateUrl: 'views/demo.html'
        })
        .otherwise({
            redirectTo: '/error'
        });
}]);
