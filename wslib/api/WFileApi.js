include("wslib/api/WiStormAPI.js",true);

/**
 * 文件接口api类
 * @constructor
 */
function WFileApi(){
	WiStormAPI.call(this);//继承父类的属性
}
WFileApi.prototype=W.API;//继承父类WiStormAPI的方法

/**
 * 
 * @param {Function} callback,上传成功之后调用
 * @param {File} file，要上传的文件对象，使用html5文件api
 * @param {Function} updateProgress，上传进度发生改变时调用，传入一个0-1之间的小数
 * @param {json} op，接口配置
 */
WFileApi.prototype.upload=function(callback,file,updateProgress,op){
	var user=W.getSetting("user");
	var OP={
		auth_code:user.auth_code,
		fields:'待定'			//默认返回的字段
	};
	jsonConcat(OP,op);
	OP.method="wicare.file.upload"; 				//接口名称
	
	
	var oData = new FormData();
	oData.append("image",file,file.name);

	var oReq = new XMLHttpRequest();
	oReq.open("POST",_apiUrl_+"upload_image?auth_code="+OP.auth_code, true);
	//oReq.open("POST","http://"+debugIp+"/test/fileUpload.php", true);
	
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
			callback(oReq.responseText);
		} else {
		  	callback("Error " + oReq.status + " occurred uploading your file.<br \/>");
		}
	};
	oReq.send(oData);
	//this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
}

WFileApi.prototype.getFile=function(){
	var OP={
		fields:'待定'			//默认返回的字段
	};
	jsonConcat(OP,op);
	OP.method="b)	wicare.file.get"; 				//接口名称
	
	//this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	W.post(WiStorm.config.safety_url,data,callback,"json");
}




W.fileApi=new WFileApi();
