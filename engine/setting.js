var config = {
    version:"0.1",
    serviceUrl:"",          // 服務接口位址
    rootUrl:"",             // 網站位址
    uploadTokenUrl:"",      // 上传接口 - 生成token信息
    uploadFlashUrl:"",      // 上传接口 - flash上传
    uploadUrl:"",           // 上传接口
    viewPath:"",            // view 路径
    controllerPath:""       // controller 路径
};

var __VERSION__ = "0.1";

var __HOST__ = window.location.host;                // 網站 HOST
var __PROTOCAL__ = window.location.protocol;        // 網站 PROTOCAL

var __UPLOAD_TOKEN_URL__ = "";                      // 上传接口 - 生成token信息
var __UPLOAD_FLASH_URL__ = "";                      // 上传接口 - flash上传
var __UPLOAD_URL__ = "";                            // 上传接口



if(__HOST__ == "zhizao.isesol.com") {
    // 正式线上
    config.serviceUrl = "//service.isesol.com/";
} else {
    // 开发测试
    //__VERSION__ = Math.random();
    config.rootUrl = "/";
    config.serviceUrl = "/data/";
    config.viewPath = "/views/";
    config.controllerPath = "/engine/controllers/";
}
