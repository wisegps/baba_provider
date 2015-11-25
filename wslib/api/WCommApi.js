include("wslib/api/WiStormAPI.js",true);
var _apiUrl_="http://api.bibibaba.cn/";//旧接口的入口
/**
 * 通讯接口api类
 * @constructor
 */
function WCommApi(){
	WiStormAPI.call(this);//继承父类的属性
}
WUserApi.prototype=W.API;//继承父类WiStormAPI的方法

WCommApi.prototype.sendSms=function(callback,mobile){
	var Data={
		method:"wicare.comm.sms.send",
		account:mobile,
		type:"0",
		action:"-1"
	};
	
	//this.getApi(Data,cb);	
	W.post(WiStorm.config.safety_url,Data,callback,"json");
}

WCommApi.prototype.checkCode=function(callback,code){
	var Data={
		method:"wicare.comm.sms.check",
		action:"0",
		valid_code:code
	};
	
	//this.postApi(Data,cb);	
	W.post(WiStorm.config.safety_url,Data,callback,"json");
}






W.commApi=new WCommApi();
