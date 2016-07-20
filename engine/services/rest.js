"use strict";

app.service('rest',["user", function (user) {
    var rest =  $resource(config.serviceUrl);

    this.get = function(serviceId, param, callback) {
        log("get service:"+serviceId);
        log("query param:"+JSON.stringify(param));
        
        param.serviceId = serviceId;
        param.token = user.getToken();
        return rest.post({"param":JSON.stringify(param)}, callback);
    };
    
    this.post = function(serviceId, param, callback) {
        log("get service:"+serviceId);
        log("query param:"+JSON.stringify(param));
        
        param.serviceId = serviceId;
        param.token = user.getToken();
        return rest.post({"param":JSON.stringify(param)}, callback);
    };
}]);
