'use strict';

webApp.provider('routeResolver', function () {

    this.$get = function () {
        return this;
    };

    this.routeConfig = function () {
        var viewsDirectory = '/app/views/',
            controllersDirectory = '/app/controllers/',

        setBaseDirectories = function (viewsDir, controllersDir) {
            viewsDirectory = viewsDir;
            controllersDirectory = controllersDir;
        },

        getViewsDirectory = function () {
            return viewsDirectory;
        },

        getControllersDirectory = function () {
            return controllersDirectory;
        };

        return {
            setBaseDirectories: setBaseDirectories,
            getControllersDirectory: getControllersDirectory,
            getViewsDirectory: getViewsDirectory
        };
    }();

    this.route = function (routeConfig) {

        var resolve = function (baseName, path, secure) {
            if (!path) path = '';

            var routeDef = {};
            routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
            routeDef.controller = baseName + 'Controller';
            routeDef.secure = (secure) ? secure : false;
            routeDef.resolve = {
                load: ['$q', '$rootScope', function ($q, $rootScope) {
                    var dependencies = [routeConfig.getControllersDirectory() + path + baseName + '.js'];
                    return resolveDependencies($q, $rootScope, dependencies);
                }]
            };

            return routeDef;
        };

        var resolveDependencies = function ($q, $rootScope, dependencies) {
            var defer = $q.defer();
            $LAB.setOptions({BasePath:config.rootUrl}).script(dependencies).wait(function () {
                defer.resolve();
                $rootScope.$apply();
            });
            return defer.promise;
        };

        return {
            resolve: resolve
        };
    }(this.routeConfig);

});

//Must be a provider since it will be injected into module.config()    
