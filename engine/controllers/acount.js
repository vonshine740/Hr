'use strict';

webApp.register.controller('acountCtrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){

    $scope.tabOptions = [{
        label: "修改密码",
        link: './system/acount/pwd',
        id: 'pwd'
    },{
        label: "修改信息",
        link: './system/acount/info',
        id: 'info'
    },
    {
        label: "增加/删减账户",
        link: './system/acount/manage',
        id: 'manage'
    },
    {
        label: "账户列表",
        link: './system/acount/ulist',
        id: 'ulist'
    }];



    $scope.routeParams = $routeParams;
}]);
