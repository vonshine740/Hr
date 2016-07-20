"use strict";

// 设定依载入顺序执行及BashPath
$LAB.setOptions({AlwaysPreserveOrder:true, BasePath:config.rootUrl, CacheBust:true})

// 载入系统核心模組
.script('engine/app.js')
.script('engine/route.js')
.script('engine/directives.js')
.script('engine/filters.js')

// 载入核心服务
.script('engine/services/file_stream.js')
.script('engine/services/user.js')
.script('engine/services/route_resolver.js')
.script('engine/services/rest.js')

// 启动angularjs
.wait(function() {
    log('script loaded');
    angular.bootstrap(document, ['webApp']);
    log('script load end');
});
