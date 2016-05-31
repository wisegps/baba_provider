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
			var keyVal='无名客户';
			if(data.cust_name){
				keyVal=data.cust_name;
			}
			
			this.innerHTML='<table><tr><th><img src="http://img.wisegps.cn/logo/m_'+data.car_brand_id+'_100.png" onerror=\'javascript:this.src="../img/icon_car_moren.png"\'><span name="value">'+data.obj_name+'</span></th></tr><tr><td><span class="name">客户名称:</span><span class="value">'+keyVal+'</span></td><td><span class="name">车型:</span><span class="value">'+data.car_type+'</span></td></tr><tr><td><span class="name">最后一次到店:</span><span class="value">'+slast_maintain+'</span></td><td><span class="name">车架号:</span><span class="value">'+data.frame_no+'</span></td></tr><tr><td><span class="name">行驶里程:</span><span class="value">'+data.mileage+'公里</span></td><td><span class="name">保养后里程:</span><span class="value">'+next_mileage+'</span></td></tr><tr><td><span class="name">到店次数:</span><span class="value">'+arrive_num+'</span></td><td><span class="name">评价次数:</span><span class="value">'+evaluate_num+'</span></td></tr></table><footer><span class="text">'+device+'</span></footer>'
			if(data.business_status!=1)
				this.querySelector("footer").appendChild(new ui_checkInBtn(data,afterCheckin));//给其中的按钮添加点击事件监听，使用sc.editData来处理点击事件
			else
				this.querySelector(".text").style.float='none';
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
	var noInfo,
	op={
		fields:Wapi.vehicle._get_op.fields+',seller_id,seller_ids',
		sorts:"obj_id",
		page:"obj_id",
		limit:"5"
	};
	function creatCar(){
		var val=W.dom.Search.value;
		if(val.length<3){
			return;
		}
		var data={
			access_token:_user.access_token,
			seller_ids:_user.seller_id+'|~[]',
			obj_name:'^'+val
		}
		Wapi.vehicle.list(carLists,data,op);
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
			var list=document.createDocumentFragment();
			
			for(var i=data.length-1;i>=0;i--){
				list.appendChild(new sc(data[i]));//创建一个sc组件，并添加到DocumentFragment里		
			}
			target.appendChild(list);//把整个列表添加到页面
	
		}		
	}
		
	//确认到店之后执行的操作
	function afterCheckin(data){
		//如果是散户，则成为商户的客户
		if(!data.seller_ids.length||(data.seller_ids.toString().indexOf(_user.seller_id)&&data.seller_ids.length<5)){
			W.loading('已确认到店，正在纳入客户资料');
			Wapi.user.addSeller(function(res){
				if(res.status_code) {
					W.errorCode(res);
					return;
				}
				W.loading('已确认到店，正在纳入车辆资料');
				Wapi.vehicle.addSeller(function(res){
					if(res.status_code) {
						W.errorCode(res);
						return;
					}
					location="customer_leave.html";
				},{
					access_token:_user.access_token,
					obj_id:data.obj_id,
					seller_id:_user.seller_id
				});
			},{
				access_token:_user.access_token,
				cust_id:data.cust_id,
				seller_id:_user.seller_id
			});
		}else{
			location="customer_leave.html";
		}
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
			for(var i=0;i<cname.length;i++){//如果已经有记录，则删除该记录
				if(scname==cname[i].scname){
					cname.splice(i,1);
					i--;
				}
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
	W("#search_d").classList.add('mui-active');
	var data={
		serial:str,
		seller_id:_user.seller_id+'|0',
		access_token:_user.access_token
	}
	Wapi.device.get(getdeviceId,data);//设备列表接口
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
		var device_id = res.device_id;
		var deviceID={
			access_token:_user.access_token,
			device_id:device_id
		}
		Wapi.vehicle.list(carLists,deviceID,op);//搜索接口		
	}

	function QRcode(){
		if(W.native){//判断scanner是否存在
			W.native.scanner.start(code);	
		}else{
			W.toast("等待扫描二维码组件");
			window.addEventListener("nativeSdkReady",QRcode);
		}
	}
//W.native={};
//W.native.scanner={
//	start:function(callback){
//		callback("56622821834")
//	}
//}