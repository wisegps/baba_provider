if(!W.encrypt){var Encrypt=W.encrypt={};Encrypt.hexcase=0;Encrypt.b64pad="";Encrypt.chrsz=8;Encrypt.hex_md5=function(s){return Encrypt.binl2hex(Encrypt.core_md5(Encrypt.str2binl(s),s.length*Encrypt.chrsz))};Encrypt.b64_md5=function(s){return Encrypt.binl2b64(Encrypt.core_md5(Encrypt.str2binl(s),s.length*Encrypt.chrsz))};Encrypt.str_md5=function(s){return Encrypt.binl2str(Encrypt.core_md5(Encrypt.str2binl(s),s.length*Encrypt.chrsz))};Encrypt.hex_hmac_md5=function(key,data){return Encrypt.binl2hex(Encrypt.core_hmac_md5(key,data))};Encrypt.b64_hmac_md5=function(key,data){return Encrypt.binl2b64(Encrypt.core_hmac_md5(key,data))};Encrypt.str_hmac_md5=function(key,data){return Encrypt.binl2str(Encrypt.core_hmac_md5(key,data))};Encrypt.core_md5=function(x,len){x[len>>5]|=128<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=Encrypt.md5_ff(a,b,c,d,x[i+0],7,-680876936);d=Encrypt.md5_ff(d,a,b,c,x[i+1],12,-389564586);c=Encrypt.md5_ff(c,d,a,b,x[i+2],17,606105819);b=Encrypt.md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=Encrypt.md5_ff(a,b,c,d,x[i+4],7,-176418897);d=Encrypt.md5_ff(d,a,b,c,x[i+5],12,1200080426);c=Encrypt.md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=Encrypt.md5_ff(b,c,d,a,x[i+7],22,-45705983);a=Encrypt.md5_ff(a,b,c,d,x[i+8],7,1770035416);d=Encrypt.md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=Encrypt.md5_ff(c,d,a,b,x[i+10],17,-42063);b=Encrypt.md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=Encrypt.md5_ff(a,b,c,d,x[i+12],7,1804603682);d=Encrypt.md5_ff(d,a,b,c,x[i+13],12,-40341101);c=Encrypt.md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=Encrypt.md5_ff(b,c,d,a,x[i+15],22,1236535329);a=Encrypt.md5_gg(a,b,c,d,x[i+1],5,-165796510);d=Encrypt.md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=Encrypt.md5_gg(c,d,a,b,x[i+11],14,643717713);b=Encrypt.md5_gg(b,c,d,a,x[i+0],20,-373897302);a=Encrypt.md5_gg(a,b,c,d,x[i+5],5,-701558691);d=Encrypt.md5_gg(d,a,b,c,x[i+10],9,38016083);c=Encrypt.md5_gg(c,d,a,b,x[i+15],14,-660478335);b=Encrypt.md5_gg(b,c,d,a,x[i+4],20,-405537848);a=Encrypt.md5_gg(a,b,c,d,x[i+9],5,568446438);d=Encrypt.md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=Encrypt.md5_gg(c,d,a,b,x[i+3],14,-187363961);b=Encrypt.md5_gg(b,c,d,a,x[i+8],20,1163531501);a=Encrypt.md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=Encrypt.md5_gg(d,a,b,c,x[i+2],9,-51403784);c=Encrypt.md5_gg(c,d,a,b,x[i+7],14,1735328473);b=Encrypt.md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=Encrypt.md5_hh(a,b,c,d,x[i+5],4,-378558);d=Encrypt.md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=Encrypt.md5_hh(c,d,a,b,x[i+11],16,1839030562);b=Encrypt.md5_hh(b,c,d,a,x[i+14],23,-35309556);a=Encrypt.md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=Encrypt.md5_hh(d,a,b,c,x[i+4],11,1272893353);c=Encrypt.md5_hh(c,d,a,b,x[i+7],16,-155497632);b=Encrypt.md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=Encrypt.md5_hh(a,b,c,d,x[i+13],4,681279174);d=Encrypt.md5_hh(d,a,b,c,x[i+0],11,-358537222);c=Encrypt.md5_hh(c,d,a,b,x[i+3],16,-722521979);b=Encrypt.md5_hh(b,c,d,a,x[i+6],23,76029189);a=Encrypt.md5_hh(a,b,c,d,x[i+9],4,-640364487);d=Encrypt.md5_hh(d,a,b,c,x[i+12],11,-421815835);c=Encrypt.md5_hh(c,d,a,b,x[i+15],16,530742520);b=Encrypt.md5_hh(b,c,d,a,x[i+2],23,-995338651);a=Encrypt.md5_ii(a,b,c,d,x[i+0],6,-198630844);d=Encrypt.md5_ii(d,a,b,c,x[i+7],10,1126891415);c=Encrypt.md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=Encrypt.md5_ii(b,c,d,a,x[i+5],21,-57434055);a=Encrypt.md5_ii(a,b,c,d,x[i+12],6,1700485571);d=Encrypt.md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=Encrypt.md5_ii(c,d,a,b,x[i+10],15,-1051523);b=Encrypt.md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=Encrypt.md5_ii(a,b,c,d,x[i+8],6,1873313359);d=Encrypt.md5_ii(d,a,b,c,x[i+15],10,-30611744);c=Encrypt.md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=Encrypt.md5_ii(b,c,d,a,x[i+13],21,1309151649);a=Encrypt.md5_ii(a,b,c,d,x[i+4],6,-145523070);d=Encrypt.md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=Encrypt.md5_ii(c,d,a,b,x[i+2],15,718787259);b=Encrypt.md5_ii(b,c,d,a,x[i+9],21,-343485551);a=Encrypt.safe_add(a,olda);b=Encrypt.safe_add(b,oldb);c=Encrypt.safe_add(c,oldc);d=Encrypt.safe_add(d,oldd)}return Array(a,b,c,d)};Encrypt.md5_cmn=function(q,a,b,x,s,t){return Encrypt.safe_add(Encrypt.bit_rol(Encrypt.safe_add(Encrypt.safe_add(a,q),Encrypt.safe_add(x,t)),s),b)};Encrypt.md5_ff=function(a,b,c,d,x,s,t){return Encrypt.md5_cmn((b&c)|((~b)&d),a,b,x,s,t)};Encrypt.md5_gg=function(a,b,c,d,x,s,t){return Encrypt.md5_cmn((b&d)|(c&(~d)),a,b,x,s,t)};Encrypt.md5_hh=function(a,b,c,d,x,s,t){return Encrypt.md5_cmn(b^c^d,a,b,x,s,t)};Encrypt.md5_ii=function(a,b,c,d,x,s,t){return Encrypt.md5_cmn(c^(b|(~d)),a,b,x,s,t)};Encrypt.core_hmac_md5=function(key,data){var bkey=Encrypt.str2binl(key);if(bkey.length>16){bkey=Encrypt.core_md5(bkey,key.length*Encrypt.chrsz)}var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^909522486;opad[i]=bkey[i]^1549556828}var hash=Encrypt.core_md5(ipad.concat(Encrypt.str2binl(data)),512+data.length*Encrypt.chrsz);return Encrypt.core_md5(opad.concat(hash),512+128)};Encrypt.safe_add=function(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&65535)};Encrypt.bit_rol=function(num,cnt){return(num<<cnt)|(num>>>(32-cnt))};Encrypt.str2binl=function(str){var bin=Array();var mask=(1<<Encrypt.chrsz)-1;for(var i=0;i<str.length*Encrypt.chrsz;i+=Encrypt.chrsz){bin[i>>5]|=(str.charCodeAt(i/Encrypt.chrsz)&mask)<<(i%32)}return bin};Encrypt.binl2str=function(bin){var str="";var mask=(1<<Encrypt.chrsz)-1;for(var i=0;i<bin.length*32;i+=Encrypt.chrsz){str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask)}return str};Encrypt.binl2hex=function(binarray){var hex_tab=Encrypt.hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&15)+hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&15)}return str};Encrypt.binl2b64=function(binarray){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3){var triplet=(((binarray[i>>2]>>8*(i%4))&255)<<16)|(((binarray[i+1>>2]>>8*((i+1)%4))&255)<<8)|((binarray[i+2>>2]>>8*((i+2)%4))&255);for(var j=0;j<4;j++){if(i*8+j*6>binarray.length*32){str+=Encrypt.b64pad}else{str+=tab.charAt((triplet>>6*(3-j))&63)}}}return str};}
var _apiUrl_="http://api.bibibaba.cn/";//旧接口的入口
var _url_ ="http://web.wisegps.cn:3000/";
/**
 * 框架的api基类，所有api类都继承此类
 * @constructor
 */
function WiStormAPI(){
	this.url="http://o.bibibaba.cn/router/rest";
	this.appKey=WiStorm.config.app_key;
	this.appSecret=WiStorm.config.app_secret;
};

WiStormAPI.prototype.getApi=function(data,callback){
	var D={
		format: 'json',   //返回数据格式
	    v: '1.0',         //接口版本
	    sign_method: 'md5'//签名方式
	}
	D.timestamp=new Date().WtoString();
	D.app_key=this.appKey;
	jsonConcat(D,data);

	var url=this.makeUrl(D);
	var ajaxSetting={
		dataType:D.format,//服务器返回json格式数据
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(res){
			if(res&&res.status_code){
				res.msg=W.API.statusCode(res.status_code);
			}
			callback(res);
		},
		error:function(xhr,type,errorThrown){//异常处理；
			console.log(type);
		}
	}
	W.ajax(url,ajaxSetting);
}

WiStormAPI.prototype.postApi=function(getData,callback,data){
	var D={
		format: 'json',   //返回数据格式
	    v: '1.0',         //接口版本
	    sign_method: 'md5'//签名方式
	}
	D.timestamp=new Date().WtoString();
	D.app_key=this.appKey;
	jsonConcat(D,getData);

	var url=this.makeUrl(D);
	var ajaxSetting={
		data:data,
		dataType:D.format,//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(res){
			if(res&&res.status_code){
				res.msg=W.API.statusCode(res.status_code);
			}
			callback(res);
		},
		error:function(xhr,type,errorThrown){//异常处理；
			console.log(type);
		}
	}
	W.ajax(url,ajaxSetting);
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
		val=json[key];
		signText+=key+val;
		getData+="&"+key+"="+val;
	}
	signText=this.appSecret+signText+this.appSecret;
	sign=W.encrypt.hex_md5(signText);
	URL=this.url+"?sign="+sign+getData;
	console.log(URL);
	return URL;
}

WiStormAPI.prototype.statusCode=function(code){
    switch (code){
      case 1:return ___.server_error.no_account;
        break;
      case 2:return ___.server_error.psw_error;
        break;
      case 7:return ___.server_error.visit_error;
        break;
      case 3:return ___.server_error.code_error;
        break;
      case 6: return ___.server_error.no_code;
        break;
      case 15:return ___.server_error.db_error;
        break;
      default:return ___.server_error.unkonw_error+"status_code="+code;
    }
}

W.API=new WiStormAPI();
