var Wapi={};Wapi.encrypt={};Wapi.encrypt.hexcase=0;Wapi.encrypt.b64pad="";Wapi.encrypt.chrsz=8;Wapi.encrypt.hex_md5=function(a){return Wapi.encrypt.binl2hex(Wapi.encrypt.core_md5(Wapi.encrypt.str2binl(a),a.length*Wapi.encrypt.chrsz))};Wapi.encrypt.b64_md5=function(a){return Wapi.encrypt.binl2b64(Wapi.encrypt.core_md5(Wapi.encrypt.str2binl(a),a.length*Wapi.encrypt.chrsz))};Wapi.encrypt.str_md5=function(a){return Wapi.encrypt.binl2str(Wapi.encrypt.core_md5(Wapi.encrypt.str2binl(a),a.length*Wapi.encrypt.chrsz))};Wapi.encrypt.hex_hmac_md5=function(a,b){return Wapi.encrypt.binl2hex(Wapi.encrypt.core_hmac_md5(a,b))};Wapi.encrypt.b64_hmac_md5=function(a,b){return Wapi.encrypt.binl2b64(Wapi.encrypt.core_hmac_md5(a,b))};Wapi.encrypt.str_hmac_md5=function(a,b){return Wapi.encrypt.binl2str(Wapi.encrypt.core_hmac_md5(a,b))};Wapi.encrypt.core_md5=function(p,k){p[k>>5]|=128<<((k)%32);p[(((k+64)>>>9)<<4)+14]=k;var o=1732584193;var n=-271733879;var m=-1732584194;var l=271733878;for(var g=0;g<p.length;g+=16){var j=o;var h=n;var f=m;var e=l;o=Wapi.encrypt.md5_ff(o,n,m,l,p[g+0],7,-680876936);l=Wapi.encrypt.md5_ff(l,o,n,m,p[g+1],12,-389564586);m=Wapi.encrypt.md5_ff(m,l,o,n,p[g+2],17,606105819);n=Wapi.encrypt.md5_ff(n,m,l,o,p[g+3],22,-1044525330);o=Wapi.encrypt.md5_ff(o,n,m,l,p[g+4],7,-176418897);l=Wapi.encrypt.md5_ff(l,o,n,m,p[g+5],12,1200080426);m=Wapi.encrypt.md5_ff(m,l,o,n,p[g+6],17,-1473231341);n=Wapi.encrypt.md5_ff(n,m,l,o,p[g+7],22,-45705983);o=Wapi.encrypt.md5_ff(o,n,m,l,p[g+8],7,1770035416);l=Wapi.encrypt.md5_ff(l,o,n,m,p[g+9],12,-1958414417);m=Wapi.encrypt.md5_ff(m,l,o,n,p[g+10],17,-42063);n=Wapi.encrypt.md5_ff(n,m,l,o,p[g+11],22,-1990404162);o=Wapi.encrypt.md5_ff(o,n,m,l,p[g+12],7,1804603682);l=Wapi.encrypt.md5_ff(l,o,n,m,p[g+13],12,-40341101);m=Wapi.encrypt.md5_ff(m,l,o,n,p[g+14],17,-1502002290);n=Wapi.encrypt.md5_ff(n,m,l,o,p[g+15],22,1236535329);o=Wapi.encrypt.md5_gg(o,n,m,l,p[g+1],5,-165796510);l=Wapi.encrypt.md5_gg(l,o,n,m,p[g+6],9,-1069501632);m=Wapi.encrypt.md5_gg(m,l,o,n,p[g+11],14,643717713);n=Wapi.encrypt.md5_gg(n,m,l,o,p[g+0],20,-373897302);o=Wapi.encrypt.md5_gg(o,n,m,l,p[g+5],5,-701558691);l=Wapi.encrypt.md5_gg(l,o,n,m,p[g+10],9,38016083);m=Wapi.encrypt.md5_gg(m,l,o,n,p[g+15],14,-660478335);n=Wapi.encrypt.md5_gg(n,m,l,o,p[g+4],20,-405537848);o=Wapi.encrypt.md5_gg(o,n,m,l,p[g+9],5,568446438);l=Wapi.encrypt.md5_gg(l,o,n,m,p[g+14],9,-1019803690);m=Wapi.encrypt.md5_gg(m,l,o,n,p[g+3],14,-187363961);n=Wapi.encrypt.md5_gg(n,m,l,o,p[g+8],20,1163531501);o=Wapi.encrypt.md5_gg(o,n,m,l,p[g+13],5,-1444681467);l=Wapi.encrypt.md5_gg(l,o,n,m,p[g+2],9,-51403784);m=Wapi.encrypt.md5_gg(m,l,o,n,p[g+7],14,1735328473);n=Wapi.encrypt.md5_gg(n,m,l,o,p[g+12],20,-1926607734);o=Wapi.encrypt.md5_hh(o,n,m,l,p[g+5],4,-378558);l=Wapi.encrypt.md5_hh(l,o,n,m,p[g+8],11,-2022574463);m=Wapi.encrypt.md5_hh(m,l,o,n,p[g+11],16,1839030562);n=Wapi.encrypt.md5_hh(n,m,l,o,p[g+14],23,-35309556);o=Wapi.encrypt.md5_hh(o,n,m,l,p[g+1],4,-1530992060);l=Wapi.encrypt.md5_hh(l,o,n,m,p[g+4],11,1272893353);m=Wapi.encrypt.md5_hh(m,l,o,n,p[g+7],16,-155497632);n=Wapi.encrypt.md5_hh(n,m,l,o,p[g+10],23,-1094730640);o=Wapi.encrypt.md5_hh(o,n,m,l,p[g+13],4,681279174);l=Wapi.encrypt.md5_hh(l,o,n,m,p[g+0],11,-358537222);m=Wapi.encrypt.md5_hh(m,l,o,n,p[g+3],16,-722521979);n=Wapi.encrypt.md5_hh(n,m,l,o,p[g+6],23,76029189);o=Wapi.encrypt.md5_hh(o,n,m,l,p[g+9],4,-640364487);l=Wapi.encrypt.md5_hh(l,o,n,m,p[g+12],11,-421815835);m=Wapi.encrypt.md5_hh(m,l,o,n,p[g+15],16,530742520);n=Wapi.encrypt.md5_hh(n,m,l,o,p[g+2],23,-995338651);o=Wapi.encrypt.md5_ii(o,n,m,l,p[g+0],6,-198630844);l=Wapi.encrypt.md5_ii(l,o,n,m,p[g+7],10,1126891415);m=Wapi.encrypt.md5_ii(m,l,o,n,p[g+14],15,-1416354905);n=Wapi.encrypt.md5_ii(n,m,l,o,p[g+5],21,-57434055);o=Wapi.encrypt.md5_ii(o,n,m,l,p[g+12],6,1700485571);l=Wapi.encrypt.md5_ii(l,o,n,m,p[g+3],10,-1894986606);m=Wapi.encrypt.md5_ii(m,l,o,n,p[g+10],15,-1051523);n=Wapi.encrypt.md5_ii(n,m,l,o,p[g+1],21,-2054922799);o=Wapi.encrypt.md5_ii(o,n,m,l,p[g+8],6,1873313359);l=Wapi.encrypt.md5_ii(l,o,n,m,p[g+15],10,-30611744);m=Wapi.encrypt.md5_ii(m,l,o,n,p[g+6],15,-1560198380);n=Wapi.encrypt.md5_ii(n,m,l,o,p[g+13],21,1309151649);o=Wapi.encrypt.md5_ii(o,n,m,l,p[g+4],6,-145523070);l=Wapi.encrypt.md5_ii(l,o,n,m,p[g+11],10,-1120210379);m=Wapi.encrypt.md5_ii(m,l,o,n,p[g+2],15,718787259);n=Wapi.encrypt.md5_ii(n,m,l,o,p[g+9],21,-343485551);o=Wapi.encrypt.safe_add(o,j);n=Wapi.encrypt.safe_add(n,h);m=Wapi.encrypt.safe_add(m,f);l=Wapi.encrypt.safe_add(l,e)}return Array(o,n,m,l)};Wapi.encrypt.md5_cmn=function(h,e,d,c,g,f){return Wapi.encrypt.safe_add(Wapi.encrypt.bit_rol(Wapi.encrypt.safe_add(Wapi.encrypt.safe_add(e,h),Wapi.encrypt.safe_add(c,f)),g),d)};Wapi.encrypt.md5_ff=function(g,f,k,j,e,i,h){return Wapi.encrypt.md5_cmn((f&k)|((~f)&j),g,f,e,i,h)};Wapi.encrypt.md5_gg=function(g,f,k,j,e,i,h){return Wapi.encrypt.md5_cmn((f&j)|(k&(~j)),g,f,e,i,h)};Wapi.encrypt.md5_hh=function(g,f,k,j,e,i,h){return Wapi.encrypt.md5_cmn(f^k^j,g,f,e,i,h)};Wapi.encrypt.md5_ii=function(g,f,k,j,e,i,h){return Wapi.encrypt.md5_cmn(k^(f|(~j)),g,f,e,i,h)
};Wapi.encrypt.core_hmac_md5=function(c,f){var e=Wapi.encrypt.str2binl(c);if(e.length>16){e=Wapi.encrypt.core_md5(e,c.length*Wapi.encrypt.chrsz)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=Wapi.encrypt.core_md5(a.concat(Wapi.encrypt.str2binl(f)),512+f.length*Wapi.encrypt.chrsz);return Wapi.encrypt.core_md5(d.concat(g),512+128)};Wapi.encrypt.safe_add=function(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)};Wapi.encrypt.bit_rol=function(a,b){return(a<<b)|(a>>>(32-b))};Wapi.encrypt.str2binl=function(d){var c=Array();var a=(1<<Wapi.encrypt.chrsz)-1;for(var b=0;b<d.length*Wapi.encrypt.chrsz;b+=Wapi.encrypt.chrsz){c[b>>5]|=(d.charCodeAt(b/Wapi.encrypt.chrsz)&a)<<(b%32)}return c};Wapi.encrypt.binl2str=function(c){var d="";var a=(1<<Wapi.encrypt.chrsz)-1;for(var b=0;b<c.length*32;b+=Wapi.encrypt.chrsz){d+=String.fromCharCode((c[b>>5]>>>(b%32))&a)}return d};Wapi.encrypt.binl2hex=function(c){var b=Wapi.encrypt.hexcase?"0123456789ABCDEF":"0123456789abcdef";var d="";for(var a=0;a<c.length*4;a++){d+=b.charAt((c[a>>2]>>((a%4)*8+4))&15)+b.charAt((c[a>>2]>>((a%4)*8))&15)}return d};Wapi.encrypt.binl2b64=function(d){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var f="";for(var b=0;b<d.length*4;b+=3){var e=(((d[b>>2]>>8*(b%4))&255)<<16)|(((d[b+1>>2]>>8*((b+1)%4))&255)<<8)|((d[b+2>>2]>>8*((b+2)%4))&255);for(var a=0;a<4;a++){if(b*8+a*6>d.length*32){f+=Wapi.encrypt.b64pad}else{f+=c.charAt((e>>6*(3-a))&63)}}}return f};function WiStormAPI(){this.url="http://o.bibibaba.cn/router/rest";this.appKey=WiStorm.config.app_key;this.appSecret=WiStorm.config.app_secret;this.encrypt=Wapi.encrypt}WiStormAPI.prototype.getApi=function(c,f,e){var d={format:"json",v:"1.0",sign_method:"md5"};d.timestamp=new Date().WtoString();d.app_key=this.appKey;this.jsonConcat(d,c);this.jsonConcat(d,e);var a=this.makeUrl(d);var b={dataType:d.format,type:"get",timeout:10000,success:f,error:function(i,g,h){console.log(g)}};this.ajax(a,b)};WiStormAPI.prototype.postApi=function(a,f,d){var e={format:"json",v:"1.0",sign_method:"md5"};e.timestamp=new Date().WtoString();e.app_key=this.appKey;this.jsonConcat(e,a);var b=this.makeUrl(e);var c={data:d,dataType:e.format,type:"post",timeout:10000,success:f(res),error:function(i,g,h){console.log(g)}};this.ajax(b,c)};WiStormAPI.prototype.makeUrl=function(h){var b="";var e="";var j=[];for(g in h){j.push(g)}j.sort();var f="",g,d="",a;for(var c=0;c<j.length;c++){g=j[c];a=encodeURI(h[g]);f+=g+a;d+="&"+g+"="+a}f=this.appSecret+f+this.appSecret;b=this.encrypt.hex_md5(f).toUpperCase();e=this.url+"?sign="+b+d;console.log(e);return e};WiStormAPI.prototype.jsonConcat=function(b,a){for(key in a){b[key]=a[key]}};WiStormAPI.prototype.ajax=function(c,b){var e={dataType:"json",timeout:10000,type:"GET",success:Wapi._noop,error:Wapi._noop};var g={"X-Requested-With":"XMLHttpRequest","Accept":"*/*","Content-Type":"application/x-www-form-urlencoded"};e.url=c;this.jsonConcat(e,b);this.jsonConcat(g,b.headers);var f="";if(e.data){for(items in e.data){f+="&"+items+"="+e.data[items]}if(e.type=="GET"){e.url+="?"+f}}var d=new XMLHttpRequest();if(e.timeout>0){d.abortTimeout=setTimeout(function(){d.onreadystatechange=Wapi._noop;d.abort();e.error(d,"timeout",e)},e.timeout)}d.onreadystatechange=function(){if(d.readyState===4){d.onreadystatechange=Wapi._noop;clearTimeout(d.abortTimeout);var h,j=false;if((d.status>=200&&d.status<300)||d.status===304||d.status===0){var i=e.dataType;var k=d.responseText;try{if(i==="xml"){h=d.responseXML}else{if(i==="json"){h=JSON.parse(k)}else{h=k}}}catch(l){j=l}if(j){e.error(d,"parsererror",e)}else{e.success(h,d,e)}}else{e.error(d,d.status?"error":"abort",e)}}};d.open(e.type,e.url,true);for(var a in e.headers){d.setRequestHeader(a,e.headers[a])}d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.send(f);return d};

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
	//this.getJSON(_apiUrl_+"base/car_series?pid="+OP.pid,null,callback);
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
	
	//this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	this.getJSON(_apiUrl_+"base/car_type?pid="+OP.pid,null,callback);
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
	
	if(obj_id){
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
	
	data._business_id=data.business_id;
	delete data.business_id;
	
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
		fields:'business_id,business_type,obj_name,obj_id,mileage,evaluate_level,status,arrive_time,leave_time,cust_id,cust_name,business_content',//默认返回的字段
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




W.vehicleApi=Wapi.vehicle=new WVehicleApi();
