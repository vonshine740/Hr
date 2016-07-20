"use strict";
var webApp = angular.module('webApp.services', 
        ['ngResource', 
         'ngCookies',
         'app.service.file_stream',
//         'app.service.cookie_store',
//         'app.services.user'
         ]);


//
//
//app.service('service',["user", function (user) {
//    var rest =  $resource(config.serviceUrl);
//
//    this.get = function(serviceId, param, callback) {
//        log("get service:"+serviceId);
//        log("query param:"+JSON.stringify(param));
//        
//        param.serviceId = serviceId;
//        param.token = user.getToken();
//        return rest.post({"param":JSON.stringify(param)}, callback);
//    };
//}]);
//
//
//app.service('Cookies',function () {
//    var self = this;
//   
//    self.domain = __COOKIE_DOMAIN__;
//
//    this.get = function(key) {
//        if (document.cookie.length>0)
//        {
//            var c_start=document.cookie.indexOf(key + "=");
//            if (c_start!=-1)
//            { 
//                c_start=c_start + key.length+1;
//                var c_end=document.cookie.indexOf(";",c_start);
//                if (c_end==-1) {
//                    c_end=document.cookie.length;
//                }
//                
//                return unescape(document.cookie.substring(c_start,c_end));
//            } 
//        }
//        return "";
//    };
//    
//    this.put = function(key, value, expiredays) {
//        var exdate=new Date();
//        exdate.setDate(exdate.getDate()+expiredays);
//        
//        document.cookie= key + "=" +escape(value)
//                        + ((_.isEmpty(expiredays)) ? "" : ";expires="+exdate.toGMTString()) 
//                        + ((_.isEmpty(self.domain)) ? "" : (";domain=" + self.domain))
//                        + ";path=/;";
//    };
//    
//});
//
//app.service('icart_v2',function ($cookieStore, $rootScope, $q, sesolService, iuser) {
//    var self = this;
//    var user = iuser.get();
//    
//    this.defaultCart = {
//            "shopCartCode":"",      // 购物车ID
//            "createDate":"",        // 建立日期
//            "prodCode":"",          // 产品ID
//            "prodName":"",          // 产品名称
//            "remark":"",            // 产品介绍
//            "designerCode":"",      // 设计师ID
//            "defaultPic":"",        // 产品图片
//            "defaultPrice":"",      // 产品价钱
//            "isOnshelves":"N",      // 是否上架
//            "returnUrl":"",         // 产品详情路径
//            "buyQty":"0",           // 购买数量
//            "materialCode":"",      // 材质代号
//            "materialName":"",      // 材质名称
//            "stampTextList":[],     // 刻字列表
//            "stampPicList":[],      // 刻图列表
//            "sizeList":"",          // 尺寸列表
//            "colorList":"",         // 颜色列表
//            "shapeList":"",         // 形状列表
//    };
//        
//    self.memberCode = $cookieStore.get("cartCode");
//    if(_.isEmpty(self.memberCode) || self.memberCode == 'd41d8cd98f00b204e9800998ecf8427e') {
//        var rnd = Math.random()+(new Date()).getTime();
//        self.memberCode = hex_md5("a"+ rnd);
//        $cookieStore.put("cartCode", self.memberCode);
//    }
//    
//    if(!_.isEmpty(user)) {
//        self.memberCode = user.memberCode;
//    }
//    
//    //this.loaded = false;
//    this.cart = [];
//    this.quickCart = [];
//    this.totalPrice = 0;
//    
//    this.get = function(type){  // type => 1:购物车 2:立刻结帐
//        if(type == 2) {
//            return this.getQuick();
//        } else {
//            return this.getCart();
//        }
//    };
//    
//    this.getCart = function(){
//        var deferred = $q.defer();
//
//        sesolService.get("shoppingCart", {"memberCode":self.memberCode}, function(response){
//            log(response, "shopingCart");
//            
//            self.cart.splice(0, self.cart.length);
//            self.totalPrice = 0;
//            angular.forEach(response.prodList, function(data, key) {
//                var item = _.clone(self.defaultCart);
//                _.extend(item, data);
//                item.stampTextList = (_.isEmpty(data.stampTextList))?[]:JSON.parse(data.stampTextList);
//                item.stampPicList = (_.isEmpty(data.stampPicList))?[]:JSON.parse(data.stampPicList);
//                item.designerCode = data.memberCode;
//                item.count = parseInt(data.buyQty);
//                item.prodSalePrice = parseFloat(data.defaultPrice).toFixed(2);
//                item.totalPrice = parseFloat((item.count*item.prodSalePrice)).toFixed(2);
//                self.totalPrice += (item.count*item.prodSalePrice);
//                
//                self.cart.push(item);
//            });
//            
//            self.totalPrice = parseFloat(self.totalPrice).toFixed(2);
//            deferred.resolve(self.cart);
//        });
//        
//        self.cart.$promise = deferred.promise;
//        return self.cart;
//    };
//    
//    this.getQuick = function(){
//        self.quickCart.splice(0, self.quickCart.length);
//        var cookies = $cookieStore.get("quick_cart");
//        angular.forEach(cookies, function(value, key) {
//            value.count = parseInt(value.buyQty);
//            value.prodSalePrice = parseFloat(value.defaultPrice).toFixed(2);
//            value.totalPrice = parseFloat((value.buyQty*value.prodSalePrice)).toFixed(2);
//            self.totalPrice += (value.buyQty*value.prodSalePrice);
//            
//            self.quickCart.push(value);
//        });
//        
//        log(self.quickCart, "quickCart")
//        
//        return self.quickCart;
//    };
//    
//    this.count = function(){
//        return self.cart.length;
//    }
//    
//    this.addCart = function(item) {
//        log(item, "addCart");
//        
//        var deferred = $q.defer();
//        sesolService.get("insertShopCar", {
//            "memberCode":self.memberCode,
//            "prodCode":item.prodCode,
//            "materialCode":item.materialCode,
//            "stampTextList":(JSON.stringify(item.stampTextList))?JSON.stringify(item.stampTextList):"",
//            "stampPicList":(JSON.stringify(item.stampPicList))?JSON.stringify(item.stampPicList):"",
//            "buyQty":(item.buyQty)?item.buyQty:"1",
//            "sizeList":item.sizeList,//尺寸
//            "colorList":item.colorList,//颜色
//            "shapeList":item.shapeList,//形状
//            "gemCode":item.gemCode, //宝石配件
//            "gemSpecUrl":item.gemSpecUrl, //购物车宝石来路
//            "prodSpecUrl":item.returnUrl //购物车产品来路
//        }, function(datas){
//                log(datas, "insertShopCar-------------data");
//                var temp = {};
//                temp.prodShopCode = (_.isEmpty(datas.prodShopCode))?[]:datas.prodShopCode;
//                deferred.resolve(temp);
//        });
//        
//        self.cart.$promise = deferred.promise;
//        return self.cart; 
//    }
//    
//    this.addQuick = function(item) {
//        log(item, "addQuick");
//        
//        var quick = [];
//        
//        if(!_.isEmpty(item.gemCode)) {
//            var gemItem = _.clone(this.defaultCart);
//            gemItem.prodCode = item.gemCode;
//            gemItem.prodName = item.gemName;
//            gemItem.designerCode = item.gemDesignerCode;
//            gemItem.materialCode = item.gemMaterialNo;
//            gemItem.materialName = item.gemMaterialName;
//            gemItem.defaultPrice = item.gemPrice;
//            gemItem.defaultPic = item.gemDefaultPic;
//            gemItem.returnUrl = item.gemSpecUrl;
//            gemItem.buyQty = 1;
//            
//            item.defaultPrice = item.defaultPrice - gemItem.defaultPrice;
//            quick.push(gemItem);
//            
//            delete item.gemCode;
//            delete item.gemName;
//            delete item.gemDesignerCode;
//            delete item.gemMaterialNo;
//            delete item.gemMaterialName;
//            delete item.gemPrice;
//            delete item.gemDefaultPic;
//            delete item.gemSpecUrl;
//        }
//        
//        quick.push(item);
//        
//        $cookieStore.put("quick_cart", quick);
//        
//        return quick;
//        
//    }
//    
//    this.add = function(item, type) {   // type => 1: 加入购物车  2: 立即购买
//        if(type == '2') {
//            return this.addQuick(item);
//        } else {
//            return this.addCart(item);
//        }
//    };
//    
//    this.clear = function() {
//        var cart = self.cart;
//
//        var deferred = $q.defer();
//        sesolService.get("deleteShoppingAll", {
//            "memberCode":self.memberCode
//            }, function(data){
//            log(data, "deleteShoppingAll");
//            if(data.success) {
//                cart.splice(0, cart.length);
//                self.totalPrice = 0;
//                deferred.resolve(cart);
//            }
//        });
//        
//        cart.$promise = deferred.promise;
//        return cart; 
//    };
//    
//    this.remove = function(codes){
//        var cart = self.cart;
//        
//        if(!_.isArray(codes)) {
//            codes = [codes];
//        }
//        
//        var deferred = $q.defer();
//        sesolService.post("deleteShopCar", {
//            "memberCode":self.memberCode,
//            "shopCartCode":codes
//            }, function(data){
//            log(data, "deleteShopCar");
//            if(data.success) {
//                angular.forEach(codes,function(value,key){
//                    angular.forEach(cart,function(val,k){
//                        if(value == val.shopCartCode){
//                            cart.splice(k, 1);
//                        }
//                    });
//                });
//                
//                self.updateTotoalPrice();
//                deferred.resolve(cart);
//            }
//        });
//        
//        cart.$promise = deferred.promise;
//        return cart; 
//    }
//    
//    this.update = function(item) {
//        var cart = self.cart;
//        var deferred = $q.defer();
//        
//        sesolService.get("updateShopCar", {
//            "memberCode":self.memberCode,
//            "shopCartCode":item.shopCartCode,
//            "buyQty":item.count
//            }, function(data){
//            log(data, "updateShopCar");
//            if(data.success) {
//                deferred.resolve(cart);
//            }
//        });
//        
//        self.updateTotoalPrice();
//        cart.$promise = deferred.promise;
//        return cart; 
//    }
//    
//    this.updateTotoalPrice = function () {
//        self.totalPrice = 0;
//        
//        angular.forEach(self.cart,function(val, key){
//            self.totalPrice += (val.count*val.prodSalePrice);
//        });
//        
//        self.totalPrice = parseFloat(self.totalPrice).toFixed(2);
//        
//        return self.totalPrice;
//    }
//    
//    this.changeToLogin = function(member_code) {
//        var deferred = $q.defer();
//
//        var ocartPromise = self.get().$promise;
//        ocartPromise.then(function(ocart){
//            self.clear();
//
//            var temp = [];
//            angular.forEach(ocart, function(data, key) {
//                temp.push(data);
//            });
//            
//            self.memberCode = member_code;
//            angular.forEach(temp, function(data, key) {
//                self.add(data);
//            });
//            
//            self.cart.$promise.then(function(data){
//                var promise = self.get().$promise;
//                promise.then(function(data){
//                    deferred.resolve(self.cart);
//                });
//            });
//        });
//
//        return deferred.promise;
//    }
//    
//});
//
//app.factory('urlParam',function () {
//    return function () {
//        // This function is anonymous, is executed immediately and 
//        // the return value is assigned to QueryString!
//        var query_string = {};
//        var query = window.location.search.substring(1);
//        var vars = query.split("&");
//        for (var i=0;i<vars.length;i++) {
//          var pair = vars[i].split("=");
//              // If first entry with this name
//          if (typeof query_string[pair[0]] === "undefined") {
//            query_string[pair[0]] = decodeURIComponent(pair[1]);
//              // If second entry with this name
//          } else if (typeof query_string[pair[0]] === "string") {
//            var arr = [query_string[pair[0]],decodeURIComponent(pair[1])];
//            query_string[pair[0]] = arr;
//              // If third or later entry with this name
//          } else {
//            query_string[pair[0]].push(decodeURIComponent(pair[1]));
//          }
//        } 
//          return query_string;
//      }();
//});
