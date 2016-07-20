"use strict";

webApp.directive('loadView',[function() {
    return {
         restrict : "E",
         replace: true,
         templateUrl : function(elem, attr){
             return attr.src+'?'+config.version;
         }
     };
}]);

webApp.directive('currency',[function(){
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
          'class':"@"  
        },
        templateUrl : "./views/input/currency.html",
        link : function(scope, element, attrs) {
            scope.title = "按我";
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
}]);

webApp.directive('hrHeader', [function(){
    // Runs during compile
    return {
        scope: {}, // {} = isolate, true = child, false/
        controller: function($scope, $element, $attrs, $transclude) {
        },
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        templateUrl: 'views/module/header.html',
        replace: true,
        link: function($scope, iElm, iAttrs, controller) {
            var aHref = window.location.href.split('/');
            $scope.stateModel = {};
            $scope.stateModel.header=aHref[3];
        }
    };
}]);

// 动态返回的侧边栏
webApp.directive('hrAside', [function(){
    // Runs during compile
    return {
        scope: {
            myType: '@'
        }, // {} = isolate, true = child, false/
        controller: function($scope, $element, $attrs, $transclude) {
            // console.log(myType);
        },
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        templateUrl: function(elem, attr){
            return 'views/module/aside-'+attr['myType']+'.html'+'?'+config.version;;
        },
        replace: true,
        link: function($scope, iElm, iAttrs, controller, myType) {
            var aHref = window.location.href.split('/');
            $scope.stateModel = {};
            $scope.stateModel.aside=aHref[4];
            // console.log($scope.stateModel.aside);

            // 计算中间区域的最小高度
            // var winH = $(window).outerHeight(),
            //     headerH = $('.main-header').outerHeight();
            // $('.main-section').css({
            //     'min-height': (winH-headerH)+'px'
            // });
        }
    };
}]);

webApp.directive('checkbox', [function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            name: '@'
        }, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<div class="checkbox-ctner"><a href="" class="checkbox"></a><input type="checkbox" class="input" /></div>',
        // templateUrl: '',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            iElm.find('.checkbox').on('click', function(){
                $(this).toggleClass('on');
            });
        }
    };
}]);

webApp.directive('switcher', [function(){
    // Runs during compile
    return {
        scope: {
            options: '@'
        },
        restrict: 'EA',
        templateUrl: './views/module/switcher.html',
        link: function($scope, iElm, iAttrs, controller) {
            // 从父级scope获取tabSwitcher的数据
            $scope.tabsData = $scope.$parent[iAttrs.options];
            // 从父级scope获取routerParmas的数据
            $scope.routeParams = $scope.$parent.routeParams;

            iElm.delegate('.tab-item', 'click', function(){
                $('.tab-item', iElm).removeClass('active');
                $(this).addClass('active');
            });
        }
    };
}]);

webApp.directive('sliderGrid', [function(){
    // Runs during compile
    return {
        scope: {
            options: '@'
        },
        restrict: 'EA',
        templateUrl: './views/module/sgrid.html',
        link: function($scope, iElm, iAttrs, controller) {
            // 从父级scope获取sgrid的配置数据
            $scope.sgrid = $scope.$parent.sgrid[iAttrs.options];
        }
    };
}]);

webApp.directive('myTest', [function(){
    // Runs during compile
    return {
        scope: {
            myUrl: '@',
            myLinkText: '@'
        }, 
        controller: function($scope, $element, $attrs, $transclude) {

        },
        restrict: 'EA',
        template: '<a href="{{myUrl}}">{{myLinkText}}</a>',
        // templateUrl: './views/module/switcher.html',
        replace: true,
        link: function($scope, iElm, iAttrs, controller) {
            $scope.myLinkText = '123';
        }
    };
}]);
