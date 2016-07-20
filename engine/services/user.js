"use strict";

webApp.service('user', [ "$q", "cookieStore", function($q, cookieStore) {
    var self = this;

    self.userInfo = {}; // 用户信息

    // 初始化
    self.init = function() {
        var cookie_user = $cookieStore.get("user");
        if (_.isObject(cookie_user)) {
            _.extend(self.userInfo, cookie_user);
        }
    };

    // 取得用户信息
    self.get = function() {
        return self.userInfo;
    };

    // 设定用户信息
    self.set = function(user) {
        if (!_.isObject(user) || !user.token) {
            return false;
        }
        _.extend(self.userInfo, user);

        cookieStore.put("token", user.token);
    };

    // 取得 token
    self.getToken = function() {
        var token = cookieStore.get("token");
        return (token)?token:'';
    };
    
    // 设定 token
    self.setToken = function(token) {
        cookieStore.put("token", token);
    };

    // 登入
    this.login = function(account, password, verifyKey, verifyCode) {
        var param = {
            "serviceId" : "loginService",
            "memberName" : (account)?account:"",
            "memberPasswd" : (password)?password:"",
            "verifyKey" : (verifyKey)?verifyKey:"",
            "verifyCode" : verifyCode
        };

        param.serviceId = "loginService";

        var deferred = $q.defer();
        sesolResource.get({
            "param" : JSON.stringify(param)
        }, function(response) {
            log(response, "login");
            if (response.success) {
                self.set(response);
                deferred.resolve(response);
            } else {
                alert(response.errorMsg);
                deferred.reject(response);
            }
        });
        return deferred.promise;
    };

    // 登出
    this.logout = function(refresh) {
        clearObject(self.userInfo);

        $cookieStore.remove("token");

        // 如果传入参数是false 则不执行刷新页面
        if (refresh == undefined || refresh) {
            location.reload();
        }
    };

    // 验证token是否合法, 同时更新用户信息
    this.vertifyToken = function() {
        var rest =  $resource(config.serviceUrl);

        var param = {};
        param.serviceId = "tokenVerify";
        param.token = self.getToken();
        
        if (_.isEmpty(param.token)) {
            return;
        }

        var deferred = $q.defer();
        rest.get({
            "param" : JSON.stringify(param)
        }, function(data) {
            log(data, "tokenVerify");
            if (data.verify == "true") {
                data.tokenInfo.token = data.token;
                self.set(data.tokenInfo);
                deferred.resolve(self.sesolUser);
            } else {
                self.logout();
                deferred.reject();
            }
        });
        return deferred.promise;
    };
} ]);
