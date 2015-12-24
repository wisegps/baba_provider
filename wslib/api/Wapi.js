var Wapi={};Wapi.encrypt={};Wapi.encrypt.hexcase=0;Wapi.encrypt.b64pad="";Wapi.encrypt.chrsz=8;Wapi.encrypt.hex_md5=function(a){return Wapi.encrypt.binl2hex(Wapi.encrypt.core_md5(Wapi.encrypt.str2binl(a),a.length*Wapi.encrypt.chrsz))};Wapi.encrypt.b64_md5=function(a){return Wapi.encrypt.binl2b64(Wapi.encrypt.core_md5(Wapi.encrypt.str2binl(a),a.length*Wapi.encrypt.chrsz))};Wapi.encrypt.str_md5=function(a){return Wapi.encrypt.binl2str(Wapi.encrypt.core_md5(Wapi.encrypt.str2binl(a),a.length*Wapi.encrypt.chrsz))};Wapi.encrypt.hex_hmac_md5=function(a,b){return Wapi.encrypt.binl2hex(Wapi.encrypt.core_hmac_md5(a,b))};Wapi.encrypt.b64_hmac_md5=function(a,b){return Wapi.encrypt.binl2b64(Wapi.encrypt.core_hmac_md5(a,b))};Wapi.encrypt.str_hmac_md5=function(a,b){return Wapi.encrypt.binl2str(Wapi.encrypt.core_hmac_md5(a,b))};Wapi.encrypt.core_md5=function(p,k){p[k>>5]|=128<<((k)%32);p[(((k+64)>>>9)<<4)+14]=k;var o=1732584193;var n=-271733879;var m=-1732584194;var l=271733878;for(var g=0;g<p.length;g+=16){var j=o;var h=n;var f=m;var e=l;o=Wapi.encrypt.md5_ff(o,n,m,l,p[g+0],7,-680876936);l=Wapi.encrypt.md5_ff(l,o,n,m,p[g+1],12,-389564586);m=Wapi.encrypt.md5_ff(m,l,o,n,p[g+2],17,606105819);n=Wapi.encrypt.md5_ff(n,m,l,o,p[g+3],22,-1044525330);o=Wapi.encrypt.md5_ff(o,n,m,l,p[g+4],7,-176418897);l=Wapi.encrypt.md5_ff(l,o,n,m,p[g+5],12,1200080426);m=Wapi.encrypt.md5_ff(m,l,o,n,p[g+6],17,-1473231341);n=Wapi.encrypt.md5_ff(n,m,l,o,p[g+7],22,-45705983);o=Wapi.encrypt.md5_ff(o,n,m,l,p[g+8],7,1770035416);l=Wapi.encrypt.md5_ff(l,o,n,m,p[g+9],12,-1958414417);m=Wapi.encrypt.md5_ff(m,l,o,n,p[g+10],17,-42063);n=Wapi.encrypt.md5_ff(n,m,l,o,p[g+11],22,-1990404162);o=Wapi.encrypt.md5_ff(o,n,m,l,p[g+12],7,1804603682);l=Wapi.encrypt.md5_ff(l,o,n,m,p[g+13],12,-40341101);m=Wapi.encrypt.md5_ff(m,l,o,n,p[g+14],17,-1502002290);n=Wapi.encrypt.md5_ff(n,m,l,o,p[g+15],22,1236535329);o=Wapi.encrypt.md5_gg(o,n,m,l,p[g+1],5,-165796510);l=Wapi.encrypt.md5_gg(l,o,n,m,p[g+6],9,-1069501632);m=Wapi.encrypt.md5_gg(m,l,o,n,p[g+11],14,643717713);n=Wapi.encrypt.md5_gg(n,m,l,o,p[g+0],20,-373897302);o=Wapi.encrypt.md5_gg(o,n,m,l,p[g+5],5,-701558691);l=Wapi.encrypt.md5_gg(l,o,n,m,p[g+10],9,38016083);m=Wapi.encrypt.md5_gg(m,l,o,n,p[g+15],14,-660478335);n=Wapi.encrypt.md5_gg(n,m,l,o,p[g+4],20,-405537848);o=Wapi.encrypt.md5_gg(o,n,m,l,p[g+9],5,568446438);l=Wapi.encrypt.md5_gg(l,o,n,m,p[g+14],9,-1019803690);m=Wapi.encrypt.md5_gg(m,l,o,n,p[g+3],14,-187363961);n=Wapi.encrypt.md5_gg(n,m,l,o,p[g+8],20,1163531501);o=Wapi.encrypt.md5_gg(o,n,m,l,p[g+13],5,-1444681467);l=Wapi.encrypt.md5_gg(l,o,n,m,p[g+2],9,-51403784);m=Wapi.encrypt.md5_gg(m,l,o,n,p[g+7],14,1735328473);n=Wapi.encrypt.md5_gg(n,m,l,o,p[g+12],20,-1926607734);o=Wapi.encrypt.md5_hh(o,n,m,l,p[g+5],4,-378558);l=Wapi.encrypt.md5_hh(l,o,n,m,p[g+8],11,-2022574463);m=Wapi.encrypt.md5_hh(m,l,o,n,p[g+11],16,1839030562);n=Wapi.encrypt.md5_hh(n,m,l,o,p[g+14],23,-35309556);o=Wapi.encrypt.md5_hh(o,n,m,l,p[g+1],4,-1530992060);l=Wapi.encrypt.md5_hh(l,o,n,m,p[g+4],11,1272893353);m=Wapi.encrypt.md5_hh(m,l,o,n,p[g+7],16,-155497632);n=Wapi.encrypt.md5_hh(n,m,l,o,p[g+10],23,-1094730640);o=Wapi.encrypt.md5_hh(o,n,m,l,p[g+13],4,681279174);l=Wapi.encrypt.md5_hh(l,o,n,m,p[g+0],11,-358537222);m=Wapi.encrypt.md5_hh(m,l,o,n,p[g+3],16,-722521979);n=Wapi.encrypt.md5_hh(n,m,l,o,p[g+6],23,76029189);o=Wapi.encrypt.md5_hh(o,n,m,l,p[g+9],4,-640364487);l=Wapi.encrypt.md5_hh(l,o,n,m,p[g+12],11,-421815835);m=Wapi.encrypt.md5_hh(m,l,o,n,p[g+15],16,530742520);n=Wapi.encrypt.md5_hh(n,m,l,o,p[g+2],23,-995338651);o=Wapi.encrypt.md5_ii(o,n,m,l,p[g+0],6,-198630844);l=Wapi.encrypt.md5_ii(l,o,n,m,p[g+7],10,1126891415);m=Wapi.encrypt.md5_ii(m,l,o,n,p[g+14],15,-1416354905);n=Wapi.encrypt.md5_ii(n,m,l,o,p[g+5],21,-57434055);o=Wapi.encrypt.md5_ii(o,n,m,l,p[g+12],6,1700485571);l=Wapi.encrypt.md5_ii(l,o,n,m,p[g+3],10,-1894986606);m=Wapi.encrypt.md5_ii(m,l,o,n,p[g+10],15,-1051523);n=Wapi.encrypt.md5_ii(n,m,l,o,p[g+1],21,-2054922799);o=Wapi.encrypt.md5_ii(o,n,m,l,p[g+8],6,1873313359);l=Wapi.encrypt.md5_ii(l,o,n,m,p[g+15],10,-30611744);m=Wapi.encrypt.md5_ii(m,l,o,n,p[g+6],15,-1560198380);n=Wapi.encrypt.md5_ii(n,m,l,o,p[g+13],21,1309151649);o=Wapi.encrypt.md5_ii(o,n,m,l,p[g+4],6,-145523070);l=Wapi.encrypt.md5_ii(l,o,n,m,p[g+11],10,-1120210379);m=Wapi.encrypt.md5_ii(m,l,o,n,p[g+2],15,718787259);n=Wapi.encrypt.md5_ii(n,m,l,o,p[g+9],21,-343485551);o=Wapi.encrypt.safe_add(o,j);n=Wapi.encrypt.safe_add(n,h);m=Wapi.encrypt.safe_add(m,f);l=Wapi.encrypt.safe_add(l,e)}return Array(o,n,m,l)};Wapi.encrypt.md5_cmn=function(h,e,d,c,g,f){return Wapi.encrypt.safe_add(Wapi.encrypt.bit_rol(Wapi.encrypt.safe_add(Wapi.encrypt.safe_add(e,h),Wapi.encrypt.safe_add(c,f)),g),d)};Wapi.encrypt.md5_ff=function(g,f,k,j,e,i,h){return Wapi.encrypt.md5_cmn((f&k)|((~f)&j),g,f,e,i,h)};Wapi.encrypt.md5_gg=function(g,f,k,j,e,i,h){return Wapi.encrypt.md5_cmn((f&j)|(k&(~j)),g,f,e,i,h)};Wapi.encrypt.md5_hh=function(g,f,k,j,e,i,h){return Wapi.encrypt.md5_cmn(f^k^j,g,f,e,i,h)};Wapi.encrypt.md5_ii=function(g,f,k,j,e,i,h){return Wapi.encrypt.md5_cmn(k^(f|(~j)),g,f,e,i,h)
};Wapi.encrypt.core_hmac_md5=function(c,f){var e=Wapi.encrypt.str2binl(c);if(e.length>16){e=Wapi.encrypt.core_md5(e,c.length*Wapi.encrypt.chrsz)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=Wapi.encrypt.core_md5(a.concat(Wapi.encrypt.str2binl(f)),512+f.length*Wapi.encrypt.chrsz);return Wapi.encrypt.core_md5(d.concat(g),512+128)};Wapi.encrypt.safe_add=function(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)};Wapi.encrypt.bit_rol=function(a,b){return(a<<b)|(a>>>(32-b))};Wapi.encrypt.str2binl=function(d){var c=Array();var a=(1<<Wapi.encrypt.chrsz)-1;for(var b=0;b<d.length*Wapi.encrypt.chrsz;b+=Wapi.encrypt.chrsz){c[b>>5]|=(d.charCodeAt(b/Wapi.encrypt.chrsz)&a)<<(b%32)}return c};Wapi.encrypt.binl2str=function(c){var d="";var a=(1<<Wapi.encrypt.chrsz)-1;for(var b=0;b<c.length*32;b+=Wapi.encrypt.chrsz){d+=String.fromCharCode((c[b>>5]>>>(b%32))&a)}return d};Wapi.encrypt.binl2hex=function(c){var b=Wapi.encrypt.hexcase?"0123456789ABCDEF":"0123456789abcdef";var d="";for(var a=0;a<c.length*4;a++){d+=b.charAt((c[a>>2]>>((a%4)*8+4))&15)+b.charAt((c[a>>2]>>((a%4)*8))&15)}return d};Wapi.encrypt.binl2b64=function(d){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var f="";for(var b=0;b<d.length*4;b+=3){var e=(((d[b>>2]>>8*(b%4))&255)<<16)|(((d[b+1>>2]>>8*((b+1)%4))&255)<<8)|((d[b+2>>2]>>8*((b+2)%4))&255);for(var a=0;a<4;a++){if(b*8+a*6>d.length*32){f+=Wapi.encrypt.b64pad}else{f+=c.charAt((e>>6*(3-a))&63)}}}return f};function WiStormAPI(){this.url="http://o.bibibaba.cn/router/rest";this.appKey=WiStorm.config.app_key;this.appSecret=WiStorm.config.app_secret;this.encrypt=Wapi.encrypt}WiStormAPI.prototype.getApi=function(c,f,e){var d={format:"json",v:"1.0",sign_method:"md5"};d.timestamp=new Date().WtoString();d.app_key=this.appKey;this.jsonConcat(d,c);this.jsonConcat(d,e);var a=this.makeUrl(d);var b={dataType:d.format,type:"get",timeout:10000,success:f,error:function(i,g,h){console.log(g)}};this.ajax(a,b)};WiStormAPI.prototype.postApi=function(a,f,d){var e={format:"json",v:"1.0",sign_method:"md5"};e.timestamp=new Date().WtoString();e.app_key=this.appKey;this.jsonConcat(e,a);var b=this.makeUrl(e);var c={data:d,dataType:e.format,type:"post",timeout:10000,success:f(res),error:function(i,g,h){console.log(g)}};this.ajax(b,c)};WiStormAPI.prototype.makeUrl=function(h){var b="";var e="";var j=[];for(g in h){j.push(g)}j.sort();var f="",g,d="",a;for(var c=0;c<j.length;c++){g=j[c];a=encodeURI(h[g]);f+=g+a;d+="&"+g+"="+a}f=this.appSecret+f+this.appSecret;b=this.encrypt.hex_md5(f).toUpperCase();e=this.url+"?sign="+b+d;console.log(e);return e};WiStormAPI.prototype.jsonConcat=function(b,a){for(key in a){b[key]=a[key]}};WiStormAPI.prototype.ajax=function(c,b){var e={dataType:"json",timeout:10000,type:"GET",success:Wapi._noop,error:Wapi._noop};var g={"X-Requested-With":"XMLHttpRequest","Accept":"*/*","Content-Type":"application/x-www-form-urlencoded"};e.url=c;this.jsonConcat(e,b);this.jsonConcat(g,b.headers);var f="";if(e.data){for(items in e.data){f+="&"+items+"="+e.data[items]}if(e.type=="GET"){e.url+="?"+f}}var d=new XMLHttpRequest();if(e.timeout>0){d.abortTimeout=setTimeout(function(){d.onreadystatechange=Wapi._noop;d.abort();e.error(d,"timeout",e)},e.timeout)}d.onreadystatechange=function(){if(d.readyState===4){d.onreadystatechange=Wapi._noop;clearTimeout(d.abortTimeout);var h,j=false;if((d.status>=200&&d.status<300)||d.status===304||d.status===0){var i=e.dataType;var k=d.responseText;try{if(i==="xml"){h=d.responseXML}else{if(i==="json"){h=JSON.parse(k)}else{h=k}}}catch(l){j=l}if(j){e.error(d,"parsererror",e)}else{e.success(h,d,e)}}else{e.error(d,d.status?"error":"abort",e)}}};d.open(e.type,e.url,true);for(var a in e.headers){d.setRequestHeader(a,e.headers[a])}d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.send(f);return d};

/**
 * 用户信息相关api类
 * @constructor
 */
function WUserApi(){}
WUserApi.prototype=new WiStormAPI();//继承父类WiStormAPI

WUserApi.prototype.login=function(callback,data,op){
	var OP={};
	this.jsonConcat(OP,op);				    //把用户传入的配置覆盖默认配置
	OP.method="wicare.user.login"; 		//接口名称
	
	data.password=this.encrypt.hex_md5(data.password);//md5加密
	this.getApi(data,callback,OP);			         //使用“GET”请求，异步获取数据
}

/**
 * 第三方登录
 * 参数：
 *      login_id: 第三方登陆返回的标识ID
 * 	返回：
 *      cust_id: 用户id
 *      cust_name: 用户名称
 *      access_token: 全局令牌
 *      valid_time: 有效时间
 * @param {Object} callback
 * @param {Object} loginId
 * @param {Object} op
 */
WUserApi.prototype.sso_login=function(callback,loginId,op){
	var data={
		login_id:loginId
	};
	this.jsonConcat(data,op);				    //把用户传入的配置覆盖默认配置
	data.method="wicare.user.sso_login"; 		//接口名称
   	this.getApi(data,callback);
};

/**
 * 注册
 * mobile: 手机(手机或者邮箱选其一)
 * email: 邮箱(手机或者邮箱选其一)
 * password: 密码
 * valid_type: 验证设备类型 1: 通过手机号  2:通过邮箱
 * valid_code: 收到的验证码
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.register=function(callback,data,op){
	var OP={
		fields:'cust_id'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.user.register"; 				//接口名称
	data.password=this.encrypt.hex_md5(data.password);
	
	this.getApi(data,callback,OP);
}

/**
 * 检查账号或者用户名是否存在
 * mobile: 手机号
 * cust_name: 用户名
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.checkExists=function(callback,data,op){
	var OP={
		fields:'exist'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.user.exists";//接口名称
	this.getApi(data,callback,OP);
}


/**
 * 重置密码
 * 参数:
 * account: 手机号码或者邮箱地址
 * passsword: md5(登陆密码)
 * valid_type: 验证设备类型 1: 通过手机号  2:通过邮箱
 * valid_code: 收到的验证码
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.resetPassword=function(callback,data,op){
	var OP={
		fields:'status_code'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.user.password.reset";//接口名称
	data.password=this.encrypt.hex_md5(data.password);
	
	this.getApi(data,callback,OP);
}

/**
 * 创建一个客户
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.create=function(callback,data,op){
	var OP={
		fields:'cust_id'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.user.create"; //接口名称
	
	this.getApi(data,callback,OP);	//调用新接口
}


/**
 * 获取用户信息（需要令牌token）
 * data包含cust_id,access_token
 * @param {Object} callback
 * @param {Object} data,需要令牌,access_token
 * @param {Object} op
 */
WUserApi.prototype.getUser=function(callback,data,op){
	var OP={
		fields:'cust_id,cust_name,cust_type,car_brand,car_series,parent_cust_id,logo,remark,create_time,update_time,photo,address,tel,mobile'//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.user.get"; //接口名称
	
	this.getApi(data,callback,OP);		//调用新接口
}

/**
 * 更新用户数据
 * @param {Function} callback
 * @param {json} data,必须指定cust_id
 * @param {OP} op
 */
WUserApi.prototype.update=function(callback,data,op){
	var OP={
		fields:'cust_id'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	data._cust_id=data.cust_id;
	delete data.cust_id;
	OP.method="wicare.user.update"; //接口名称
	
	this.getApi(data,callback,OP);	//调用新接口
}

/**
 * 获取用户授权令牌access_token
 * data包含：
 *     account:登录手机或邮箱
 *     passsword:密码
 * @param {Function} callback
 * @param {json} data，账户密码
 * @param {OP} op
 */
WUserApi.prototype.getToken=function(callback,data,op){
	var OP={
		fields:'access_token'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.user.access_token"; //接口名称
	data.password=this.encrypt.hex_md5(data.password);
	this.getApi(data,callback,OP);
}


/**
 * 获取商户下的客户(需要令牌token)
 * data包含：
 *     seller_id: 商户ID;
 *     max_id: 本页最大ID, 获取下页内容时使用
 *     access_token:令牌
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.getVehicleList=function(callback,data,op){
	var OP={
		fields:'cust_name,obj_id,cust_id,obj_name,device_id,car_brand_id,car_brand,car_series_id,car_series,car_type_id,car_type,frame_no,maintain_last_mileage,mileage,arrive_count,evaluate_count,last_arrive_time,business_status,evaluate_level',	//默认返回的字段
		sorts:"obj_id",
		page:"obj_id",
		limit:"20"
	};
	
	this.jsonConcat(OP,op);				    //把用户传入的配置覆盖默认配置
	OP.method="wicare.vehicles.list"; 				//接口名称
	
	if(data.parent_cust_id){
		data.seller_id=data.parent_cust_id;
		delete data.parent_cust_id;
	}
	
	this.getApi(data,callback,OP);
}

/**
 * 搜索车辆(需要令牌token)
 * data包含：
 *     seller_id: 商户ID;
 *     obj_name: 搜索的车牌号
 *     max_id: 本页最大ID, 获取下页内容时使用
 *     access_token:令牌
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.searchCustomerVehicle=function(callback,data,op){
	if(data.obj_name)
		data.obj_name="^"+data.obj_name;
	Wapi.user.getVehicleList(callback,data,op);
}

/**
 * 到店离店统计,需要令牌
 * data包含：
 *     parent_cust_id: 商户ID;
 *     begin_time: 开始时间;
 *     end_time: 结束时间;
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.getBusinessTotal=function(callback,data,op){
	var OP={
		fields:'arrive_total,leave_total,evaluate_total'//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.business.total';//接口名称
	if(data.parent_cust_id){
		data.seller_id=data.parent_cust_id;
		delete data.parent_cust_id;
	}
	
	this.getApi(data,callback,OP);		//调用新接口
}

/**
 * 获取设备列表,令牌
 * 参数:
 *   seller_id: 商户ID;
 *   max_id: 本页最大ID, 获取下页内容时使用
 *   fields: 返回字段;
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.getDeviceList=function(callback,data,op){
	var OP={
		fields:'device_id,serial,cust_id,cust_name,device_type,sim,status,active_time',
		sorts: 'device_id',
	    page: 'device_id',
    	limit: "20"
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.devices.list';
	
	if(data.parent_cust_id){
		data.seller_id=data.parent_cust_id;
		delete data.parent_cust_id;
	}
	this.getApi(data,callback,OP);
}

/**
 *获取商户的异常车况列表
 *	参数:
 *	    seller_id: 商户Id
 *	    exp_type: 异常类型, 不传为全部 1:保养到期 2:长期未到店 3:故障
 *	    max_id: 本地最大Id
 *	    fields: 返回字段
 *	返回：
 *	      由fields设定的字段
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.getExceptionList=function(callback,data,op){
	var OP={
		fields:'exception_id,msg_template,obj_id,cust_id,obj_name,cust_name,device_id,car_brand_id,car_brand,car_series_id,car_series,car_type_id,car_type,maintain_last_mileage,mileage,last_arrive,exp_type,exp_reason,pushed,push_time,create_time,update_time',
		sorts: 'exception_id',
	    page: 'exception_id',
    	limit: "20"
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.exceptions.list';
	
	if(data.parent_cust_id){
		data.seller_id=data.parent_cust_id;
		delete data.parent_cust_id;
	}
	
	this.getApi(data,callback,OP);
}

/**
 * 删除异常车况
 * 参数:
 *     exc_id: 异常Id
 * 返回：
 *   status_code: 状态码
 */
WUserApi.prototype.deleteException = function (callback,exc_id){
	var OP={
		fields:'status_code',
		exception_id:exc_id,
		method:'wicare.exception.delete'
	};
	this.getApi(OP,callback);
};

/**
 * 更新异常车况
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.updateException=function(callback,data,op){
	var OP={
		fields:'status_code'
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.exception.update"; //接口名称
	
	if(data.exception_id){
		data._exception_id=data.exception_id;
		delete data.exception_id;
	}
	
	this.getApi(data,callback,OP);	//调用新接口
}

/**
 * 创建一条异常记录
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.createException=function(callback,data,op){
	var OP={
		fields:'status_code,exception_id'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.exception.create';//接口名称
	
	this.getApi(data,callback,OP);		//调用新接口
}










/**
 * 提醒设置表
 */

/**
 * 新增一个提醒设置
 * 参数：参考数据库字段
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.createSchema=function(callback,data,op){
	var OP={
		fields:'option_id'			//默认返回提醒id
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.exception_option.create"; //接口名称
	
	this.getApi(data,callback,OP);	//调用新接口
}

/**
 * 删除一个提醒设置
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.deleteSchema=function(callback,data,op){
	var OP={
		fields:'status_code'
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.exception_option.delete"; //接口名称
	
	this.getApi(data,callback,OP);
}

/**
 * 更改一个提醒设置
 * 参数：
 * 	_option_id:提醒设置的id
 * 	其余为需要更改的字段（除去option_id，create_time，update_time）
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.updataSchema=function(callback,data,op){
	var OP={
		fields:'status_code'
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.exception_option.update"; //接口名称
	
	this.getApi(data,callback,OP);	//调用新接口
}

/**
 * 获取一条提醒设置
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.getSchema=function(callback,data,op){
	
}

/**
 * 获取提醒列表
 * 参数：
 * 	seller_id:商户id
 * 	max_id:本页最大option_id（可选）
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.getSchemaList=function(callback,data,op){
	var OP={
		fields:'option_id,option_type,option_name,cust_id,mileage,duration,object,object_type,object_name,msg_template,create_time,update_time',
		sorts: 'option_id',
	    page: 'option_id',
    	limit: "20"
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.exception_options.list';
	
	this.getApi(data,callback,OP);
}





/**
 * 发送聊天信息(推送)
 * 参数:
 *     user_id: Number,               //用户id
 *     cust_name: String,             //发送名称
 *     friend_id: Number,             //好友id
 *     type: Number,                  //私信类型 0:文本  1:图片  2:语音  3:文件 4:位置
 *     url: String,                   //如果图片，或者语音，则需设置该地址
 *     content: String,               //文本内容
 *     voice_len: Number,             //语音长度
 *     lon: Number,                   //发送位置经度
 *     lat: Number,                   //发送位置纬度
 *     address: String,               //发送位置地址
 * 返回：
 *     status_code: 状态码
 * @param {Object} callback
 * @param {Object} data
 */
WUserApi.prototype.sendChat=function(callback,data){
	data.method='wicare.chat.create';
	this.getApi(data,callback);
}

/**
 * 获取聊天记录
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.getChatList=function(callback,data,op){
	var OP={
		fields:'chat_id,user_id,friend_id,type,url,content,voice_len,lon,lat,address,create_time,read_time,sender_id,receiver_id',
		sorts: '-chat_id',
	    page: 'chat_id',
    	limit: "20"
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.chats.list';
	
	this.getApi(data,callback,OP);
}

/**
 * 聊天用户列表
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WUserApi.prototype.getRelationList=function(callback,data,op){
	var OP={
		fields:'relat_id,user_id,friend_id,friend_type,friend_name,sex,logo,content,send_time,create_time,unread_count,status',
		sorts: '-create_time',
	    page: 'create_time',
    	limit: "20"
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.relations.list';
	
	this.getApi(data,callback,OP);
}


/**
 * 创建一条崩溃/错误记录
 * @param {Object} data
 * @param {Object} callback
 * @param {Object} op
 */
WUserApi.prototype.createCrash=function(data,callback,op){
	var OP={
		fields:'status_code,exception_id'
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.crash.create';
	
	this.getApi(data,callback,OP);
}













/**
 * 基础接口api类
 * @constructor
 */
function WBaseApi(){}
WBaseApi.prototype=new WiStormAPI();






/**
 * 通讯接口api类
 * @constructor
 */
function WCommApi(){}
WCommApi.prototype=new WiStormAPI();//继承父类WiStormAPI的方法

/**
 * 参数:
 * mobile: 手机号码
 * type: 发送短信类型
 * 1: 普通校验码信息
 * 2: 忘记密码校验信息
 * @param {Object} callback
 * @param {Object} mobile
 */
WCommApi.prototype.sendSMS=function(callback,mobile,type){
	var Data={
		method:"wicare.comm.sms.send",
		mobile:mobile,
		type:type
	};
	
	this.getApi(Data,callback);	
}

WCommApi.prototype.validCode=function(callback,data,op){
	var OP={
		fields:'valid'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.user.valid_code";//接口名称
	this.getApi(data,callback,OP);
}





/**
 * 开发者接口api类
 * @constructor
 */
function WDeveloperApi(){}
WDeveloperApi.prototype=new WiStormAPI();










/**
 * 终端接口api类
 * @constructor
 */
function WDeviceApi(){}
WDeviceApi.prototype=new WiStormAPI();

/**
 * 更新设备信息(需要令牌access_token)
 * 参数:
 * 	   必须device_id
 *    device表里面的除了create_time, update_time之外的所有字段
 * 返回：
 *    status_code: 状态码
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WDeviceApi.prototype.update=function(callback,data,op){
	var OP={
		fields:'status_code'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.device.update';//接口名称
	
	if(data.device_id){
		data._device_id=data.device_id;
		delete data.device_id;
	}
	
	this.getApi(data,callback,OP);		//调用新接口
}

///**
// * 获取某一设备，搜索字段直接传入
// * @param {Object} callback
// * @param {Object} data
// * @param {Object} op
// */
//WDeviceApi.prototype.getOne=function(callback,data,op){
//	var OP={
//		fields:'device_id,serial,cust_id,cust_name,device_type,sim,status,active_time'
//	};
//	this.jsonConcat(OP,op);
//	OP.method='wicare.device.get';
//	
//	this.getApi(data,callback,OP);
//}

/**
 * 获取电压曲线及水温曲线
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WDeviceApi.prototype.getDeviceObdDataList=function(callback,data,op){
	var OP={
		fields:'rcv_time,obd_data.dpdy,obd_data.sw',	//默认返回的字段
		sorts:"rcv_time",
		page:"rcv_time",
		limit:"1000"
	};
	
	this.jsonConcat(OP,op);				    //把用户传入的配置覆盖默认配置
	OP.method="wicare.device_obd_datas.list"; 				//接口名称
	
	this.getApi(data,callback,OP);
}

/**
 * 获取里程日曲线或者平均油耗日曲线
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WDeviceApi.prototype.getDayTripList=function(callback,data,op){
	var OP={
		fields:'rcv_day,total_distance,avg_fuel',	//默认返回的字段
		sorts:"rcv_day",
		page:"rcv_day",
		limit:"1000"
	};
	
	this.jsonConcat(OP,op);				    //把用户传入的配置覆盖默认配置
	OP.method="wicare.day_trips.list"; 				//接口名称
	
	this.getApi(data,callback,OP);
}








/**
 * 文件接口api类
 * @constructor
 */
function WFileApi(){}
WFileApi.prototype=new WiStormAPI();//继承父类WiStormAPI的方法

/**
 * 
 * @param {Function} callback,上传成功之后调用
 * @param {File} file，要上传的文件对象，使用html5文件api
 * @param {Function} updateProgress，上传进度发生改变时调用，传入一个0-1之间的小数
 * @param {json} op，接口配置
 */
WFileApi.prototype.upload=function(callback,file,updateProgress,op){
	var OP={
		auth_code:WiStorm.config.test_code,
		format: 'json',   //返回数据格式
	    v: '1.0',         //接口版本
	    sign_method: 'md5',//签名方式
		fields:'待定'	//默认返回的字段
	};
	OP.timestamp=new Date().WtoString();
	OP.app_key=this.appKey;
	this.jsonConcat(OP,op);
	OP.method="wicare.file.upload"; 
	var url=this.makeUrl(OP);//签名并构建路径
	
	var oData = new FormData();
	oData.append("image",file,file.name);

	var oReq = new XMLHttpRequest();
	oReq.open("POST",url,true);
	
	if(updateProgress){
		oReq.upload.addEventListener("progress",function(event){
			if(event.lengthComputable){
			    var percentComplete = event.loaded / event.total;
			    updateProgress(percentComplete);
			}
		});
	}
	oReq.onload = function(oEvent) {
		if (oReq.status == 200) {
			var json;
			try{
				json=JSON.parse(oReq.responseText);
			}catch(e){
				//TODO handle the exception
				json=oReq.responseText;
			}
			callback(json);
		} else {
		  	callback("Error " + oReq.status + " occurred uploading your file.<br \/>");
		}
	};
	oReq.send(oData);
}

WFileApi.prototype.getFile=function(){
	var OP={
		fields:'待定'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method="wicare.file.get"; 				//接口名称
	
	//this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	this.post(WiStorm.config.safety_url,data,callback,"json");
}






/**
 * 订单接口api类
 * @constructor
 */
function WOrderApi(){}
WOrderApi.prototype=new WiStormAPI();






/**
 * 支付接口api类
 * @constructor
 */
function WPayApi(){}
WPayApi.prototype=new WiStormAPI();//继承父类WiStormAPI的方法

/**
 * 产生订单并获取微信支付参数,
 * callback会在页面跳回到时候调用，所以不支持匿名函数和局部函数
 * 下单成功会自动跳转到确认订单页面，在确认订单页面支付，支付完成会返回当前url;
 * 参数:
 *	cust_id: 商户Id;
 *	open_id: 微信用户OpenID;
 *	order_type: 订单类型 1: 设备 2: 服务费
 *	product_name: 产品名称;
 *	remark: 产品描述;
 *	unit_price: 单价;
 *	quantity: 数量;
 *	total_price: 总价;
 */
WPayApi.prototype.pay=function(callback,data){
	data.method='wicare.pay.weixin';
	this.getApi(data,function(res){
		if(res.status_code){
			//后台下单不成功
			callback(res);
		}else{
			//下单成功跳转确认订单页面
			localStorage.setItem("_weixin_pay_args",JSON.stringify(res.pay_args));
			localStorage.setItem("_weixin_pay_callback",callback.name)
			top.location="activation.html?title="+data.product_name+"&detail="+data.remark+"&price="+data.total_price;
		}
	});
}
window.addEventListener("load",function(){
	var callback=localStorage.getItem("_weixin_pay_callback");
	var res=localStorage.getItem("_weixin_pay_res");	
	localStorage.removeItem("_weixin_pay_callback");
	localStorage.removeItem("_weixin_pay_res");
	if(callback&&res){
		eval(callback+"("+res+")");
	}
})





/**
 * 车辆接口api类
 * @constructor
 */
function WVehicleApi(){}
WVehicleApi.prototype=new WiStormAPI();//继承父类WiStormAPI的方法

/**
 * 获取品牌列表
 * @param {Function} callback
 * @param {json} op，接口配置，可选
 */
WVehicleApi.prototype.getBrands=function(callback,op){
	OP={};
	this.jsonConcat(OP,op)
	OP.method='wicare.base.car_brands.list';//接口名称
	
	this.getApi(OP,callback);		//调用新接口
}

/**
 * 获取车系列表
 * @param {Function} callback
 * @param {String} id，品牌id
 * @param {options} op，接口配置，可选
 */
WVehicleApi.prototype.getSeriess=function(callback,id,op){
	var OP={
		pid:id
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.base.car_series.list';//接口名称
	
	this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
}

/**
 * 获取车款列表
 * @param {Function} callback
 * @param {String} id，车系id
 * @param {options} op，接口配置，可选
 */
WVehicleApi.prototype.getTypes=function(callback,id,op){
	var OP={
		pid:id
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.base.car_types.list';//接口名称
	
	this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
}

/**
 * 更新车辆信息,需要token
 * data包含obj_id，access_token
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WVehicleApi.prototype.update=function(callback,data,op){
	var OP={
		fields:'obj_id'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.vehicle.update';//接口名称
	
	if(data.obj_id){
		data._obj_id=data.obj_id;
		delete data.obj_id;
	}
	
	this.getApi(data,callback,OP);		//调用新接口
}

/**
 * 获取某一车辆信息，搜索字段直接传入
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WVehicleApi.prototype.getOne=function(callback,data,op){
	var OP={
		fields:'cust_name,obj_id,cust_id,obj_name,device_id,car_brand_id,car_brand,car_series_id,car_series,car_type_id,car_type,frame_no,maintain_last_mileage,mileage,arrive_count,last_arrive_time,business_status'
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.vehicle.get';
	
	this.getApi(data,callback,OP);
}




/**
 * 创建业务信息
 * @param {Function} callback
 * @param {json} data
 * @param {options} op
 */
WVehicleApi.prototype.createBusiness=function(callback,data,op){
	var OP={
		fields:'status_code,business_id'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.business.create';//接口名称
	
	this.getApi(data,callback,OP);		//调用新接口
}

/**
 * 更新一条业务信息
 * @param {Function} callback
 * @param {json} data
 * @param {options} op
 */
WVehicleApi.prototype.updateBusiness=function(callback,data,op){
	var OP={
		fields:'status_code'			//默认返回的字段
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.business.update';//接口名称

	this.getApi(data,callback,OP);		//调用新接口
}
/**
 * seller_id: 商户ID;
 * status: 状态 1:在店 2:离店;
 * query_type: 离店查询方式 1: 到店时间 2: 离店时间 3: 评价时间
 * begin_time: 开始时间;
 * end_time: 结束时间;
 * max_id: 本页最大ID, 获取下页内容时使用
 * @param {Object} callback
 * @param {Object} data
 * @param {Object} op
 */
WVehicleApi.prototype.getBusinessList=function(callback,data,op){
	var OP={
		fields:'business_id,business_type,obj_name,obj_id,mileage,evaluate_level,status,arrive_time,leave_time,cust_id,cust_name,business_content,car_brand_id,car_brand,car_series_id,car_series,car_type_id,car_type',//默认返回的字段
		sorts:"business_id",
		page:"business_id",
		limit:"20"
	};
	this.jsonConcat(OP,op);
	OP.method='wicare.business.list';//接口名称
	
	if(data.parent_cust_id){
		data.seller_id=data.parent_cust_id;
		delete data.parent_cust_id;
	}
	
	this.getApi(data,callback,OP);		//调用新接口
}






W.vehicleApi=Wapi.vehicle=new WVehicleApi();//车辆
W.payApi=Wapi.pay=new WPayApi();//支付
W.orderApi=Wapi.order=new WOrderApi();//订单
W.fileApi=Wapi.file=new WFileApi();//文件
W.deviceApi=Wapi.device=new WDeviceApi();//设备
W.developerApi=Wapi.developer=new WDeveloperApi();//开发者
W.userApi=Wapi.user=new WUserApi();//用户
W.baseApi=Wapi.base=new WBaseApi();//基本
W.commApi=Wapi.comm=new WCommApi();//通信




//处理记录在本地的错误日志
var __errorLog=localStorage.getItem("errorList");
var __errorList;
if(__errorLog){
	try{
		__errorList=JSON.parse(__errorLog);
	}catch(e){
		//TODO handle the exception
		__errorList=[];
	}
	for(var __i=0;__i<__errorList.length;__i++){
		Wapi.user.createCrash(__errorList[__i],function(res){});
	}
	localStorage.removeItem("errorList");
}




