var Wapi={};Wapi.encrypt={};Wapi.encrypt.hexcase=0;Wapi.encrypt.b64pad="";Wapi.encrypt.chrsz=8;Wapi.encrypt.hex_md5=function(s){return Wapi.encrypt.binl2hex(Wapi.encrypt.core_md5(Wapi.encrypt.str2binl(s),s.length*Wapi.encrypt.chrsz))};Wapi.encrypt.b64_md5=function(s){return Wapi.encrypt.binl2b64(Wapi.encrypt.core_md5(Wapi.encrypt.str2binl(s),s.length*Wapi.encrypt.chrsz))};Wapi.encrypt.str_md5=function(s){return Wapi.encrypt.binl2str(Wapi.encrypt.core_md5(Wapi.encrypt.str2binl(s),s.length*Wapi.encrypt.chrsz))};Wapi.encrypt.hex_hmac_md5=function(key,data){return Wapi.encrypt.binl2hex(Wapi.encrypt.core_hmac_md5(key,data))};Wapi.encrypt.b64_hmac_md5=function(key,data){return Wapi.encrypt.binl2b64(Wapi.encrypt.core_hmac_md5(key,data))};Wapi.encrypt.str_hmac_md5=function(key,data){return Wapi.encrypt.binl2str(Wapi.encrypt.core_hmac_md5(key,data))};Wapi.encrypt.core_md5=function(x,len){x[len>>5]|=128<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=Wapi.encrypt.md5_ff(a,b,c,d,x[i+0],7,-680876936);d=Wapi.encrypt.md5_ff(d,a,b,c,x[i+1],12,-389564586);c=Wapi.encrypt.md5_ff(c,d,a,b,x[i+2],17,606105819);b=Wapi.encrypt.md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=Wapi.encrypt.md5_ff(a,b,c,d,x[i+4],7,-176418897);d=Wapi.encrypt.md5_ff(d,a,b,c,x[i+5],12,1200080426);c=Wapi.encrypt.md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=Wapi.encrypt.md5_ff(b,c,d,a,x[i+7],22,-45705983);a=Wapi.encrypt.md5_ff(a,b,c,d,x[i+8],7,1770035416);d=Wapi.encrypt.md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=Wapi.encrypt.md5_ff(c,d,a,b,x[i+10],17,-42063);b=Wapi.encrypt.md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=Wapi.encrypt.md5_ff(a,b,c,d,x[i+12],7,1804603682);d=Wapi.encrypt.md5_ff(d,a,b,c,x[i+13],12,-40341101);c=Wapi.encrypt.md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=Wapi.encrypt.md5_ff(b,c,d,a,x[i+15],22,1236535329);a=Wapi.encrypt.md5_gg(a,b,c,d,x[i+1],5,-165796510);d=Wapi.encrypt.md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=Wapi.encrypt.md5_gg(c,d,a,b,x[i+11],14,643717713);b=Wapi.encrypt.md5_gg(b,c,d,a,x[i+0],20,-373897302);a=Wapi.encrypt.md5_gg(a,b,c,d,x[i+5],5,-701558691);d=Wapi.encrypt.md5_gg(d,a,b,c,x[i+10],9,38016083);c=Wapi.encrypt.md5_gg(c,d,a,b,x[i+15],14,-660478335);b=Wapi.encrypt.md5_gg(b,c,d,a,x[i+4],20,-405537848);a=Wapi.encrypt.md5_gg(a,b,c,d,x[i+9],5,568446438);d=Wapi.encrypt.md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=Wapi.encrypt.md5_gg(c,d,a,b,x[i+3],14,-187363961);b=Wapi.encrypt.md5_gg(b,c,d,a,x[i+8],20,1163531501);a=Wapi.encrypt.md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=Wapi.encrypt.md5_gg(d,a,b,c,x[i+2],9,-51403784);c=Wapi.encrypt.md5_gg(c,d,a,b,x[i+7],14,1735328473);b=Wapi.encrypt.md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=Wapi.encrypt.md5_hh(a,b,c,d,x[i+5],4,-378558);d=Wapi.encrypt.md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=Wapi.encrypt.md5_hh(c,d,a,b,x[i+11],16,1839030562);b=Wapi.encrypt.md5_hh(b,c,d,a,x[i+14],23,-35309556);a=Wapi.encrypt.md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=Wapi.encrypt.md5_hh(d,a,b,c,x[i+4],11,1272893353);c=Wapi.encrypt.md5_hh(c,d,a,b,x[i+7],16,-155497632);b=Wapi.encrypt.md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=Wapi.encrypt.md5_hh(a,b,c,d,x[i+13],4,681279174);d=Wapi.encrypt.md5_hh(d,a,b,c,x[i+0],11,-358537222);c=Wapi.encrypt.md5_hh(c,d,a,b,x[i+3],16,-722521979);b=Wapi.encrypt.md5_hh(b,c,d,a,x[i+6],23,76029189);a=Wapi.encrypt.md5_hh(a,b,c,d,x[i+9],4,-640364487);d=Wapi.encrypt.md5_hh(d,a,b,c,x[i+12],11,-421815835);c=Wapi.encrypt.md5_hh(c,d,a,b,x[i+15],16,530742520);b=Wapi.encrypt.md5_hh(b,c,d,a,x[i+2],23,-995338651);a=Wapi.encrypt.md5_ii(a,b,c,d,x[i+0],6,-198630844);d=Wapi.encrypt.md5_ii(d,a,b,c,x[i+7],10,1126891415);c=Wapi.encrypt.md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=Wapi.encrypt.md5_ii(b,c,d,a,x[i+5],21,-57434055);a=Wapi.encrypt.md5_ii(a,b,c,d,x[i+12],6,1700485571);d=Wapi.encrypt.md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=Wapi.encrypt.md5_ii(c,d,a,b,x[i+10],15,-1051523);b=Wapi.encrypt.md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=Wapi.encrypt.md5_ii(a,b,c,d,x[i+8],6,1873313359);d=Wapi.encrypt.md5_ii(d,a,b,c,x[i+15],10,-30611744);c=Wapi.encrypt.md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=Wapi.encrypt.md5_ii(b,c,d,a,x[i+13],21,1309151649);a=Wapi.encrypt.md5_ii(a,b,c,d,x[i+4],6,-145523070);d=Wapi.encrypt.md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=Wapi.encrypt.md5_ii(c,d,a,b,x[i+2],15,718787259);b=Wapi.encrypt.md5_ii(b,c,d,a,x[i+9],21,-343485551);a=Wapi.encrypt.safe_add(a,olda);b=Wapi.encrypt.safe_add(b,oldb);c=Wapi.encrypt.safe_add(c,oldc);d=Wapi.encrypt.safe_add(d,oldd)}return Array(a,b,c,d)};Wapi.encrypt.md5_cmn=function(q,a,b,x,s,t){return Wapi.encrypt.safe_add(Wapi.encrypt.bit_rol(Wapi.encrypt.safe_add(Wapi.encrypt.safe_add(a,q),Wapi.encrypt.safe_add(x,t)),s),b)};Wapi.encrypt.md5_ff=function(a,b,c,d,x,s,t){return Wapi.encrypt.md5_cmn((b&c)|((~b)&d),a,b,x,s,t)};Wapi.encrypt.md5_gg=function(a,b,c,d,x,s,t){return Wapi.encrypt.md5_cmn((b&d)|(c&(~d)),a,b,x,s,t)};Wapi.encrypt.md5_hh=function(a,b,c,d,x,s,t){return Wapi.encrypt.md5_cmn(b^c^d,a,b,x,s,t)};Wapi.encrypt.md5_ii=function(a,b,c,d,x,s,t){return Wapi.encrypt.md5_cmn(c^(b|(~d)),a,b,x,s,t)};Wapi.encrypt.core_hmac_md5=function(key,data){var bkey=Wapi.encrypt.str2binl(key);if(bkey.length>16){bkey=Wapi.encrypt.core_md5(bkey,key.length*Wapi.encrypt.chrsz)}var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^909522486;opad[i]=bkey[i]^1549556828}var hash=Wapi.encrypt.core_md5(ipad.concat(Wapi.encrypt.str2binl(data)),512+data.length*Wapi.encrypt.chrsz);return Wapi.encrypt.core_md5(opad.concat(hash),512+128)};Wapi.encrypt.safe_add=function(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&65535)};Wapi.encrypt.bit_rol=function(num,cnt){return(num<<cnt)|(num>>>(32-cnt))};Wapi.encrypt.str2binl=function(str){var bin=Array();var mask=(1<<Wapi.encrypt.chrsz)-1;for(var i=0;i<str.length*Wapi.encrypt.chrsz;i+=Wapi.encrypt.chrsz){bin[i>>5]|=(str.charCodeAt(i/Wapi.encrypt.chrsz)&mask)<<(i%32)}return bin};Wapi.encrypt.binl2str=function(bin){var str="";var mask=(1<<Wapi.encrypt.chrsz)-1;for(var i=0;i<bin.length*32;i+=Wapi.encrypt.chrsz){str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask)}return str};Wapi.encrypt.binl2hex=function(binarray){var hex_tab=Wapi.encrypt.hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&15)+hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&15)}return str};Wapi.encrypt.binl2b64=function(binarray){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3){var triplet=(((binarray[i>>2]>>8*(i%4))&255)<<16)|(((binarray[i+1>>2]>>8*((i+1)%4))&255)<<8)|((binarray[i+2>>2]>>8*((i+2)%4))&255);for(var j=0;j<4;j++){if(i*8+j*6>binarray.length*32){str+=Wapi.encrypt.b64pad}else{str+=tab.charAt((triplet>>6*(3-j))&63)}}}return str};
/**
 * 框架的api基类，所有api类都继承此类
 * @constructor
 */
function WiStormAPI(){
	this.url="http://o.bibibaba.cn/router/rest";
	this.appKey=WiStorm.config.app_key;
	this.appSecret=WiStorm.config.app_secret;
	this.encrypt=Wapi.encrypt;
};

/**
 * get方法的接口调用
 * @param {Object} data
 * @param {Object} callback
 * @param {Object} op
 */
WiStormAPI.prototype.getApi=function(data,callback,op){
	var D={
		format: 'json',   //返回数据格式
	    v: '1.0',         //接口版本
	    sign_method: 'md5'//签名方式
	}
	D.timestamp=new Date().WtoString();
	D.app_key=this.appKey;
	this.jsonConcat(D,data);
	this.jsonConcat(D,op);

	var url=this.makeUrl(D);
	var ajaxSetting={
		dataType:D.format,//服务器返回json格式数据
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:callback,
		error:function(xhr,type,errorThrown){//异常处理；
			console.log(type);
		}
	}
	this.ajax(url,ajaxSetting);
}

WiStormAPI.prototype.postApi=function(getData,callback,data){
	var D={
		format: 'json',   //返回数据格式
	    v: '1.0',         //接口版本
	    sign_method: 'md5'//签名方式
	}
	D.timestamp=new Date().WtoString();
	D.app_key=this.appKey;
	this.jsonConcat(D,getData);

	var url=this.makeUrl(D);
	var ajaxSetting={
		data:data,
		dataType:D.format,//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:callback(res),
		error:function(xhr,type,errorThrown){//异常处理；
			console.log(type);
		}
	}
	this.ajax(url,ajaxSetting);
}

WiStormAPI.prototype.makeUrl=function(json){
	var sign="";
	var URL="";
	
	//按key名进行排序
	var keyArr=[];
	for(key in json){
		keyArr.push(key);
	}
	keyArr.sort();
	
	//拼装
	var signText="",key,getData="",val;
	for(var i=0;i<keyArr.length;i++){
		key=keyArr[i];
		val=encodeURI(json[key]);
		signText+=key+val;
		getData+="&"+key+"="+val;
	}
	signText=this.appSecret+signText+this.appSecret;
	sign=this.encrypt.hex_md5(signText).toUpperCase();
	URL=this.url+"?sign="+sign+getData;
	console.log(URL);
	return URL;
}

/**
 * 合并两个json对象，如果存在相同属性，取第二个json的属性值
 * @param {Object} json1
 * @param {Object} json2
 */
WiStormAPI.prototype.jsonConcat=function(json1,json2){
	for(key in json2){
		json1[key]=json2[key];
	}
};

/**
 * 框架的ajax，mui的ajax转化而来，无依赖
 * @param {String} url
 * @param {Object} options，具体可参考http://dev.dcloud.net.cn/mui/ajax/
 */
WiStormAPI.prototype.ajax=function(url,options) {
	var json={
		dataType:"json",
		timeout:10000,
		type:"GET",
		success:Wapi._noop,
		error:Wapi._noop
	}
	var headers = {
		"X-Requested-With": "XMLHttpRequest",
		"Accept": "*/*",
		"Content-Type": "application/x-www-form-urlencoded"
	};
	json.url=url;
	this.jsonConcat(json,options);
	this.jsonConcat(headers,options.headers);
	
	json.type=json.type.toUpperCase();
    var data="";
    if(json.data){
	    for (items in json.data){
			data+="&"+items+"="+json.data[items];
		}
		if(json.type=="GET")
			json.url+="?"+data.slice(1);
    }
	
	var xmlhttp=new XMLHttpRequest();
	if (json.timeout>0){
		xmlhttp.abortTimeout=setTimeout(function(){
			xmlhttp.onreadystatechange=Wapi._noop;
			xmlhttp.abort();
			json.error(xmlhttp,'timeout',json);
		}, json.timeout);
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState === 4) {
			xmlhttp.onreadystatechange = Wapi._noop;
			clearTimeout(xmlhttp.abortTimeout);
			var result, error = false;
			if ((xmlhttp.status >= 200 && xmlhttp.status < 300) || xmlhttp.status === 304 ||xmlhttp.status === 0){
				var dataType=json.dataType;
				var resultText = xmlhttp.responseText;
				try {
					if (dataType === 'xml') {
						result = xmlhttp.responseXML;
					} else if (dataType === 'json') {
						result = JSON.parse(resultText);
					}else
						result=resultText;
				} catch (e) {
					error = e;
				}
				if (error) {
					json.error(xmlhttp,'parsererror',json);
				} else {
					json.success(result, xmlhttp, json);
				}
			} else {
				json.error(xmlhttp,xmlhttp.status ? 'error' : 'abort', json);
			}
		}
	}
	xmlhttp.open(json.type,json.url,true);
	
	for (var name in json.headers) {
		xmlhttp.setRequestHeader(name,json.headers[name]);
	}
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
    
    return xmlhttp;
};

Wapi._=new WiStormAPI();
Wapi._noop=function(){};
