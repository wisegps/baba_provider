include("wslib/api/WiStormAPI.js",true);

/**
 * 车辆接口api类
 * @constructor
 */
function WVehicleApi(){
	WiStormAPI.call(this);//继承父类的属性
}
WVehicleApi.prototype=W.API;//继承父类WiStormAPI的方法

/**
 * 获取品牌列表
 * @param {Function} callback
 * @param {json} op，接口配置，可选
 */
WVehicleApi.prototype.getBrands=function(callback,op){
	var OP={
		fields:'待定'			//默认返回的字段
	};			
	jsonConcat(OP,op);
	OP.method='wicare.vehicle.brands.list';//接口名称
	
	//this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	W.getJSON(_apiUrl_+"base/car_brand",null,callback);
}

/**
 * 获取车系列表
 * @param {Function} callback
 * @param {String} id，品牌id
 * @param {json} op，接口配置，可选
 */
WVehicleApi.prototype.getSeriess=function(callback,id,op){
	var OP={
		pid:id,
		fields:'待定'			//默认返回的字段
	};
	jsonConcat(OP,op);
	OP.method='wicare.vehicle.seriess.list';//接口名称
	
	//this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	W.getJSON(_apiUrl_+"base/car_series?pid="+OP.pid,null,callback);
}

/**
 * 获取车款列表
 * @param {Function} callback
 * @param {String} id，车系id
 * @param {json} op，接口配置，可选
 */
WVehicleApi.prototype.getTypes=function(callback,id,op){
	var OP={
		pid:id,
		fields:'待定'			//默认返回的字段
	};
	jsonConcat(OP,op);
	OP.method='wicare.vehicle.types.list';//接口名称
	
	//this.getApi(OP,callback);		//调用新接口（这里因为新接口还没有做好，所以先注释，使用下面的旧接口）
	W.getJSON(_apiUrl_+"base/car_type?pid="+OP.pid,null,callback);
}






W.vehicleApi=new WVehicleApi();
