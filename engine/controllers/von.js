"use strict";

webApp.register.controller("vonCtrl", ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
    console.log('in 123 ctrl');
    //log(id, "id:");
    
    $scope.data = {};
    $scope.data.checkbox = true;
    
    log($routeParams, "route:");
    
    
}]);

