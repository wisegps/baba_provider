include("wslib/api/WiStormAPI.js",true);

/**
 * 用户信息相关api类
 * @constructor
 */
function WUserApi(){
	WiStormAPI.call(this);//继承父类WiStormAPI的属性
}
WUserApi.prototype=W.API;//继承父类WiStormAPI的方法

WUserApi.prototype.register=function(callback,data,op){
	var OP={
		fields:'待定'			//默认返回的字段
	};
	jsonConcat(OP,op);
	OP.method="wicare.user.register"; 				//接口名称
	data.action="4";
	data.password=W.encrypt.hex_md5(data.password);
	
	//this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	W.post(WiStorm.config.safety_url,data,callback,"json");
}

WUserApi.prototype.login=function(callback,data){
	var Data={								//默认配置
		fields:'cust_id,auth_code'			//默认返回的字段（用户可自定义）
	};
	var cb=function(res){
		if(!res.status_code){
			W.logout();
			W._login=true;//表示已登录
			W.setSetting("user",res);//设置登录成功之后，返回的json默认存储到WiStorm.setting.user中
		}							 //(这里是因为登录接口比较特别，所以默认处理了，
									 //	之后需要用到用户相关资料的接口就可以不用开发者传入了，如下面的getCarList)
		callback(res);
	}
	
	jsonConcat(Data,data);				    //把用户传入的配置覆盖默认配置
	Data.method="wicare.user.login"; 		//接口名称
	
	if(Data.login_id){//第三方登录
		W.getJSON(_apiUrl_+"sso_login?login_id=" + Data.login_id,null,cb);
		return;
	}else{
		Data.password=W.encrypt.hex_md5(data.password);//md5加密
		this.getApi(Data,cb);			         //使用“GET”请求，异步获取数据
	}
}

WUserApi.prototype.bind=function(callback,data,op){
	var user=W.getSetting("user");			//获取WiStorm.setting.user中存储的登录返回的数据json
	var Data={
		fields:'待定',			//默认返回的字段（用户可自定义，这里因为新接口还没做好，就先乱写的）
		auth_code:user.auth_code,
		cust_id:user.cust_id
	};	//获取user数据并赋值 
	jsonConcat(Data,op);
	Data.method="待定"; 				//接口名称
	
	//this.getApi(Data,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	W.ajax(_apiUrl_+"customer/"+Data.cust_id+"/bind_qq?auth_code="+Data.auth_code,{
		type:"PUT",
		data:data,
		success:callback
	});
}

WUserApi.prototype.checkExists=function(callback,data){
	var Data={
		fields:'待定'			//默认返回的字段（用户可自定义，这里因为新接口还没做好，就先乱写的）
	};
	jsonConcat(Data,data);
	Data.method="待定"; 				//接口名称
	//this.getApi(Data,callback);
	W.getJSON(_apiUrl_+"exists?query_type="+Data.type+"&value="+Data.value,null,callback);
}

WUserApi.prototype.resetPassword=function(callback,data,op){
	var OP={
		fields:'待定'			//默认返回的字段
	};
	jsonConcat(OP,op);
	OP.method="待定"; 				//接口名称
	data.action="2";
	
	//this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	W.post(WiStorm.config.safety_url,data,callback,"json");
}








WUserApi.prototype.getCarList=function(callback,data){//因为默认是获取当前用户的车辆，完全可以不传数据
	var user=W.getSetting("user");			//获取WiStorm.setting.user中存储的登录返回的数据json
	var Data={
		fields:'待定',			//默认返回的字段（用户可自定义，这里因为新接口还没做好，就先乱写的）
		auth_code:user.auth_code,
		
		cust_id:user.cust_id
	};	//获取user数据并赋值 
	
	jsonConcat(Data,data);				    //把用户传入的配置覆盖默认配置
	Data.method="wicare.user.vehicles.list"; 				//接口名称
	
	//this.getApi(Data,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	W.getJSON(_apiUrl_+"customer/"+Data.cust_id+"/vehicle?auth_code="+Data.auth_code,null,callback);
}

WUserApi.prototype.getCustomersList=function(callback,data){
	var user=W.getSetting("user");			//获取WiStorm.setting.user中存储的登录返回的数据json
	var Data={
		fields:'待定',
		auth_code:user.auth_code,
		
		cust_id:user.cust_id,
		tree_path:user.tree_path,
		page_count:"100"
	};	//获取user数据并赋值
	
	jsonConcat(Data,data);				//把用户传入的配置覆盖默认配置
	Data.method='wicare.user.customers.list';//接口名称
	
	//this.getApi(this.data,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	
	var url=_url_+"customer/"+Data.cust_id+"/vehicle?auth_code="+Data.auth_code+"&tree_path="+Data.tree_path+"&mode=all&page_no=1&page_count="+Data.page_count;
	W.getJSON(url,null,callback);
}

W.userApi=new WUserApi();//一旦引入本文件，则可以通过访问全局变量W的userApi属性来访问本接口类
