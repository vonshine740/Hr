'use strict';

webApp.register.controller('indexController', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
    console.log('in test ctrl');
    //log(id, "id:");
    
    log($routeParams, "route:");
    
    $scope.ghost = "这是鬼";
    
    $scope.change= function(){$scope.ghost = "不是鬼了"};
    
}]);
console.log('I\'m indexCtrl, i am loaded!');
