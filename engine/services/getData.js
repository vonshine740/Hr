"use strict";

webApp.service('getService', function ($http) {
    var serviceUrl = config.serviceUrl;

    var runDataRequest = function(path) {
        // 返回一个带有数据返回的promise
        return $http({
            method: 'GET',
            url: serviceUrl+path
        });
    };
    // 返回带有一个events函数的服务对象
    return {
        getData: function(path) {
                    return runDataRequest(path);
                }
            }
});
