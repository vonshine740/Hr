"use strict";

webApp.service('indexService', function ($http) {
    var serviceUrl = config.serviceUrl;

    var runIndexRequest = function(path) {
        // 返回一个带有数据返回的promise
        return $http({
            method: 'GET',
            url: serviceUrl+'index/'+path
        });
    };
    // 返回带有一个events函数的服务对象
    return {
        getData: function(path) {
                    return runIndexRequest(path);
                }
            }
});
