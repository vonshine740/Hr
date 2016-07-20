"use strict";

var app = angular.module('app.filters', []);

webApp.filter('range',[function() {
    return function(input) {
      var ret = [];
      var total = parseInt(input);
      for (var i=0; i<total; i++)
          ret.push(i);
      return ret;
    };
}]);

webApp.filter('percent',[function() {
    return function(input) {
      if(input == 1){
        return '100%';
      }
      if(input == 0){
        return '--';
      }
      return (Math.abs(input)*100).toFixed(1)+'%';
    };
}]);

webApp.filter('zcurrency',["$filter", function($filter) {
    
    var currencyList = {
        "CN":{"symbol":"&", "fractionSize":"4"},
        "US":{"symbol":"$", "fractionSize":"2"},
    };
    
    return function (currency, type) {
        return $filter('currency')(currency, currencyList[type].symbol, currencyList[type].fractionSize);
    };
}]);

webApp.filter('paginate', [function(){
    return function (pagesize, current, showpage) {
        var ret = [];
        var half = parseInt(showpage/2);
        var min = parseInt(current - half);
        if(min < 1) {
            min = 0;
        }        

        var max = parseInt(min + showpage);
        if(max > pagesize) {
            max = pagesize;
            min = ((max - showpage) > 0)?(max-showpage):0;
        }
        

        for (var i=min; i<max; i++)
            ret.push(i);
        
        return ret;
    }
}]);

webApp.filter('min',[function() {
    return function(input, param) {
      var v1 = parseInt(input);
      var v2 = parseInt(param);
      
      if(v1 < v2) {
          return v1;
      } else {
          return v2;
      }
    };
}]);

webApp.filter('max',[function() {
    return function(input, param) {
      var v1 = parseInt(input);
      var v2 = parseInt(param);
      
      if(v1 > v2) {
          return v1;
      } else {
          return v2;
      }
    };
}]);
