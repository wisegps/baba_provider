include("wslib/api/WiStormAPI.js",true);
var _apiUrl_="http://api.bibibaba.cn/";//旧接口的入口
/**
 * 开发者接口api类
 * @constructor
 */
function WDeveloperApi(){
	WiStormAPI.call(this);//继承父类的属性
}
W.developerApi=new WDeveloperApi();
