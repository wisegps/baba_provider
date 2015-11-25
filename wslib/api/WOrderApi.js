include("wslib/api/WiStormAPI.js",true);
var _apiUrl_="http://api.bibibaba.cn/";//旧接口的入口
/**
 * 订单接口api类
 * @constructor
 */
function WOrderApi(){
	WiStormAPI.call(this);//继承父类的属性
}
W.orderApi=new WOrderApi();
