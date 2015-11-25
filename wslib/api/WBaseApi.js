include("wslib/api/WiStormAPI.js",true);
var _apiUrl_="http://api.bibibaba.cn/";//旧接口的入口
/**
 * 基础接口api类
 * @constructor
 */
function WBaseApi(){
	WiStormAPI.call(this);//继承父类的属性
}
W.baseApi=new WBaseApi();
