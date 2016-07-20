"use strict";

webApp.register.controller("trainingServiceController", ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
    
    $scope.gridOptions = {
        enableSorting: true,
        enableCellEditOnFocus: true,
        rowHeight: 'auto',
        columnDefs: [ 
            { name: '教室', enableSorting: false, enableCellEdit:         false },
            { name: '上课状态' },
            { name: '上课时间' },
            { name: '类型' },
            { name: '学生' },
            { name: '登录时间，上课时间，进入教室时间' },
            { name: '老师' },
            { name: '登录时间，上课时间，进入教室时间' },
            { name: '评价' },
            { name: '课堂跟踪' }
        ],
        data: [
            {'field1': '1', 'field2': '1', 'field3': '1'}
        ]
    };
}]);

