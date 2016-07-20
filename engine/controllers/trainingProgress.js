"use strict";

webApp.register.controller("trainingProgressController", ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
    
    $scope.gridOptions = {
        enableSorting: true,
        enableCellEditOnFocus: true,
        rowHeight: 'auto',
        columnDefs: [ 
            { name: '教室', enableSorting: false, enableCellEdit: false },
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
            {'教室': '1', '上课状态': '1', '上课时间': '1', '类型': '1', '学生': '1','登录时间，上课时间，进入教室时间': '1', '老师': '1', '登录时间，上课时间，进入教室时间': '1', '评价': '1', '课堂跟踪': '1'},
            {'教室': '1', '上课状态': '1', '上课时间': '1', '类型': '1', '学生': '1','登录时间，上课时间，进入教室时间': '1', '老师': '1', '登录时间，上课时间，进入教室时间': '1', '评价': '1', '课堂跟踪': '1'},
            {'教室': '1', '上课状态': '1', '上课时间': '1', '类型': '1', '学生': '1','登录时间，上课时间，进入教室时间': '1', '老师': '1', '登录时间，上课时间，进入教室时间': '1', '评价': '1', '课堂跟踪': '1'}
        ]
    };
}]);

