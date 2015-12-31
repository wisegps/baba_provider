var scname,suname,slast_maintain,car_brand_id;//车牌号，客户名，最后一次到店时间	
W.dom.Search=W("#search");//缓存
/**
 * 创建车辆组件
 * @param {Object} data
 */
	function sc(data){
		var obj=new WiStormUI("div");//创建一个div组件
		
		obj.merge(this);//将原型sc.prototype中的方法赋予当前obj
		
		obj.className="ui_car_d";//设置div的class属性
		
		obj.setData(data);//设置obj的内容,setData()在下面sc.prototype中定义
		
		return obj;//最后记得要返回组件
	}
	//给组件添加对象方法
	sc.prototype.getData=function(){
		return this.data;
	}
	sc.prototype.setData=function(data){
		if(data!=null){
			scname = data.obj_name;
			suname = data.cust_name;
			car_brand_id =data.car_brand_id;
			//最后一次到店
			if(data.last_arrive_time){
				var lastTime = data.last_arrive_time.slice(0,10);
				lastTime=lastTime.replace(/-/g,'/');
				slast_maintain = new Date(lastTime);//将日期转换成时间戳
				var timestamp = new Date();
				slast_maintain = timestamp-slast_maintain;
				slast_maintain =Math.floor(slast_maintain/(1000 * 60* 60* 24))+"天前";
			}else{
				slast_maintain='未曾到店';
			}
			//到店次数
			var arrive_num;
			if(data.arrive_count){
				arrive_num =data.arrive_count;
			}else{
				arrive_num=0;
			}
			//评价次数
			var evaluate_num;
			if(data.evaluate_count){
				evaluate_num =data.evaluate_count;
			}else{
				evaluate_num=0;
			}
			//保养后的里程
			var next_mileage;
			if(data.maintain_last_mileage){
				next_mileage=(data.mileage-data.maintain_last_mileage)+"公里";//保养后的里程
			}else{
				next_mileage=data.mileage+"公里";//保养后的里程				
			}
			var device;//设备			
			if(data.device_id){
				device='设备已激活';
			}else{
				device='设备未激活';				
			}
			
			this.innerHTML='<table><tr><th><img src="http://img.wisegps.cn/logo/m_'+data.car_brand_id+'_100.png" onerror=\'javascript:this.src="../img/icon_car_moren.png"\'><span name="value">'+data.obj_name+'</span></th></tr><tr><td><span class="name">客户名称:</span><span class="value">'+data.cust_name+'</span></td><td><span class="name">车型:</span><span class="value">'+data.car_type+'</span></td></tr><tr><td><span class="name">最后一次到店:</span><span class="value">'+slast_maintain+'</span></td><td><span class="name">车架号:</span><span class="value">'+data.frame_no+'</span></td></tr><tr><td><span class="name">行驶里程:</span><span class="value">'+data.mileage+'公里</span></td><td><span class="name">保养后里程:</span><span class="value">'+next_mileage+'</span></td></tr><tr><td><span class="name">到店次数:</span><span class="value">'+arrive_num+'</span></td><td><span class="name">评价次数:</span><span class="value">'+evaluate_num+'</span></td></tr></table><footer><span class="text">'+device+'</span></footer>'

			this.querySelector("footer").appendChild(new ui_checkInBtn(data));//给其中的按钮添加点击事件监听，使用sc.editData来处理点击事件
			
			if(data.obj_id){
				this.querySelector("table").addEvent("click",sc.toDetail).obj_id=data.obj_id;
			}
			this.data=data;//直接把数据缓存进入组件（按需求，如果数据是需要重复用的就这样缓存）

		}else{
			console.log("未连接到服务器。");
		}

	}
/**
 * 搜索显示的车辆信息
 */
	var MAX_ID=0,noInfo;
	function creatCar(){
		var val=W.dom.Search.value;
		MAX_ID=0;
		data={
			access_token:_user.access_token,
			parent_cust_id:_user.cust_id,
			max_id:MAX_ID,
			obj_name:val
		}
		W.userApi.searchCustomerVehicle(carLists,data);
	};
	
/**
 * 车辆信息
 * @param {Object} res
 */
	function  carLists(res){
			if (res.status_code) {
					W.errorCode(res);
					return;
			}
					W("#his_clear").style.display="none";
					W("#his_list").style.display="none";
					W("#sc_list").innerHTML="";					
		//判断是否具备搜索条件  搜索数据不存在 显示新建客户
		if(!res || res.total==0){
			noInfo=0;
			W("#cUser").style.display="block";
		}else{
			noInfo=1;
			W("#cUser").style.display="none";

			var dom={};
			var data=res.data;
			var target=W.dom.target;
			if(!target)
				target=W("#sc_list");//缓存经常使用的元素;W()为元素选择器，使用css选择规则，有两个参数，具体查看WiStorm.js
			if(!target.data)								 //W.dom是一个json，专门用于缓存元素
				target.data=data;
			else
				target.data=target.data.concat(data);
			/*创建DocumentFragment碎片；
			构造列表时不要每创建一个元素就添加到页面里，这样会造成性能低下，把元素添加到DocumentFragment，
			最后再把DocumentFragment添加到页面*/
			var list=document.createDocumentFragment();
			
			for(var i=data.length-1;i>=0;i--){
				list.appendChild(new sc(data[i]));//创建一个sc组件，并添加到DocumentFragment里		
				if(data[i].obj_id>MAX_ID)
					MAX_ID=data[i].obj_id;
			}
			if(res.total>target.data.length){       //判断当前列表的长度是否小于总条数
				dom.show.max_id=MAX_ID;
				data.max_id=MAX_ID;
				var autoLoad;						//把加载的存起来		
				if(target.autoLoad){
					autoLoad=target.autoLoad;
				}else if(WiStorm.agent.ios)
					autoLoad=new ui_autoLoad(W(".mui-content"),_load);
				else
					autoLoad=new ui_autoLoad(document,_load);
				list.appendChild(autoLoad);
				target.autoLoad=autoLoad;
			}else if(target.autoLoad){
				//删除自动加载组件,释放内存
				target.autoLoad.remove();
				delete target.autoLoad;
			}
			target.appendChild(list);//把整个列表添加到页面
	
		}		
	}
		//自动加载下一页
		function _load(){
			W.userApi.getDeviceList(carLists,param);
		}
		
/**
 * 把多条数据加入到数组存储到本地
 */
	W("#search").onblur =function(){
		var val=W.trim(W.dom.Search.value);
		if(val!="" && noInfo==1){
			var cname = W.ls("cname");
			if(cname==null){
				cname = new Array(); 
			}
			if(cname.length>=5){
				cname.shift();
			}
			/*
			 设置本地存储的历史记录	
			 * */	
			 var j={
			 	"scname":scname,
			 	"suname":suname,
			 	"car_brand_id":car_brand_id,
			 	"slast_maintain":slast_maintain
			 }
			cname.push(j);
			W.setLS("cname",cname);//这个是h5 存储
		}
	}
/**
 * 扫描二维码
 */
function code(str){
	W.dom.Search.value=str;//str=serial
	W("#search_d").classList.add('mui-active');
	var data={
		serial:str,
		seller_id:_user.cust_id,
		access_token:_user.access_token
	}
	Wapi.user.getDeviceList(getdeviceId,data);//设备列表接口
}
/**
 * 
 * @param {Object} res
 */
	function getdeviceId(res){
		if (res.status_code) {
				W.errorCode(res);
				return;
		}
		if(res.data!=null && res.data.length!=0){
			var device_id = res.data[0].device_id;
			var deviceID={
				access_token:_user.access_token,
				seller_id:_user.cust_id,
				device_id:device_id
			}
			Wapi.user.searchCustomerVehicle(carLists,deviceID);//搜索接口		
		}
	}

	function QRcode(){
		if(W.native){//判断scanner是否存在
			W.native.scanner.start(code);	
		}else{
			W.toast("等待扫描二维码组件");
			window.addEventListener("nativeSdkReady",QRcode);
		}
	}
/*W.native.scanner={
	start:function(callback){
		callback("55621854091")
	}
}
*/