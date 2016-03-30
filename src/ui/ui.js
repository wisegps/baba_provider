/**
 * 公共组件
 */


//首先，在页面中插入样式(如果多的话，另存一个文件，换插入link元素的方式引入样式)
var _ui_style=document.createElement("style");
_ui_style.innerHTML="";
document.lastChild.appendChild(_ui_style);

/**
 * 确认到店按钮
 * @param {Object} id
 */
function ui_checkInBtn(data){
	var obj=WiStormUI("button");
	obj.className="mui-btn mui-btn-primary";
	obj.type="button";
	obj.innerText="确认到店";
	obj.setAttribute("data-id",data.obj_id);
	obj.addEvent("click",ui_checkInBtn.showBox);
	obj.data=data;
	return obj;
}
ui_checkInBtn._finish=function(){
	ui_checkInBtn.finish.call(this);
}

//点击美容、维修、保养、救援到店按钮触发
ui_checkInBtn.finish=function(){
	var box=W.parents(this,5);
	var textarea=box.querySelector("textarea");
	var type=this.getAttribute("data-type");
	var text=textarea.value;
	
	var car=box.car_data;
	var params={
		seller_id:_user.seller_id,
		cust_id: car.cust_id,
		cust_name: car.cust_name,
		obj_id: car.obj_id,
		obj_name: car.obj_name,
		mileage: car.mileage,
		business_type: type,
		business_content: text,
		access_token:_user.access_token
	}
	W.loading(true);
	
	W.vehicleApi.createBusiness(function(res){
		W.loading();
		if(res.status_code){
			W.errorCode(res);
			return;
		}
		location="customer_leave.html";
	},params);
}

//确认到店按钮的点击事件触发
ui_checkInBtn.showBox=function(){
	var obj=ui_checkInBtn.box;
	if(obj){
		obj.car_data=this.data;
		obj.show();
	}else{
		obj=new WiStormUI("div");
		obj.className="cover_paper alert_box fadeIn";
		obj.innerHTML='<div class="tabel_center"><div class="alert_view content fromTop" style="padding: 1em;position: relative;"><span class="mui-icon mui-icon-close"></span><div>选择维修类型</div><div class="checkin_box"><textarea placeholder="备注（可不填）"></textarea><div style="text-align: left;margin-bottom: 5px;"><button type="button" class="mui-btn W_primary" data-type="1">到店保养</button><button type="button" class="mui-btn W_primary" style="float: right;" data-type="2">到店维修</button></div><div style="text-align: left;"><button type="button" class="mui-btn W_primary" data-type="3">到店美容</button><button type="button" class="mui-btn W_primary" style="float: right;" data-type="4">到店救援</button></div></div></div></div>';
		obj.show=WiStormUI.show;
		obj.hide=WiStormUI.hide;
		
		obj.querySelector(".mui-icon-close").addEvent("click",function(){//关闭按钮
			obj.hide();
		});
		
		obj.querySelector("[data-type='3']").addEvent("click",ui_checkInBtn._finish);
		obj.querySelector("[data-type='2']").addEvent("click",ui_checkInBtn._finish);
		obj.querySelector("[data-type='1']").addEvent("click",ui_checkInBtn._finish);
		obj.querySelector("[data-type='4']").addEvent("click",ui_checkInBtn._finish);
		
		obj.car_data=this.data;
		obj._show=true;
		document.body.appendChild(obj);
		ui_checkInBtn.box=obj;
	}
}

/**
 * 选择车牌省份组件
 */
function ui_areaBox(){
	W.focus(event.target);
	
	var box=ui_areaBox.box;
	if(box){
		box.show();
	}else{
		var obj=WiStormUI("div");
		obj.className="child_view fromRight";
		obj.style.paddingTop="44px";
		obj.style.position="fixed";
		obj.innerHTML='<div class="mui-bar mui-bar-nav onshadow"><a class="mui-icon mui-icon-left-nav mui-pull-left"></a><h1 class="mui-title">请选择车辆地区</h1></div><table rules="all" frame="box" class="ui_child_table"><tbody><tr><td>京</td><td>津</td><td>沪</td><td>渝</td></tr><tr><td>冀</td><td>豫</td><td>云</td><td>辽</td></tr><tr><td>黑</td><td>湘</td><td>皖</td><td>鲁</td></tr><tr><td>新</td><td>苏</td><td>浙</td><td>赣</td></tr><tr><td>鄂</td><td>桂</td><td>甘</td><td>晋</td></tr><tr><td>蒙</td><td>陕</td><td>吉</td><td>闽</td></tr><tr><td>贵</td><td>粤</td><td>青</td><td>藏</td></tr><tr><td>川</td><td>宁</td><td>琼</td></tr></tbody></table>';
		
		obj.show=function(){
			this.classList.add("fromRight");
			this.classList.remove("hide");
			this.classList.remove("toRight");
		};
		obj.hide=function(){
			this.classList.remove("fromRight");
			this.classList.add("toRight");
		};
		obj.querySelector(".mui-icon-left-nav").addEvent("click",function(){
			W.parents(this,2).hide();
		});
		
		var tds=obj.querySelectorAll("td");
		for(var i=tds.length-1;i>=0;i--){
			tds[i].addEvent("click",ui_areaBox._finish);
		}
		
		document.body.appendChild(obj);
		ui_areaBox.box=obj;
	}
}
ui_areaBox._finish=function(){
	ui_areaBox.finish.call(this);
}
//选择完车牌之后调用方法
ui_areaBox.finish=function(){
	var val=this.innerText;
	var tar=W.getFocus();
	tar.value=val;
	tar.innerText=val;
	var p=W.parents(this,".child_view");
	p.hide();
}

/**
 * 召唤出选择车型的界面
 */
function ui_carSeries(){
	W.focus(event.target);
	if(!ui_carSeries.box){
		var param=this.getAttribute("data-param");
		ui_carSeries.preLoad(param);
	}
	ui_carSeries.box.show();
}
ui_carSeries.preLoad=function(param){
	var box = WiStormUI("div");
	box.className = "child_view hide";
	if(param)
		param="?"+param;
	else 
		param="";
	box.innerHTML = '<iframe src="' + WiStorm.root + 'src/ui/car_series.html' +param+'"></iframe>';
	box.style.position = "fixed";
	
	box.show = function() {
		this.classList.remove("hide");
		this.classList.remove("toRight");
		this.classList.add("fromRight");
//		var win=this.firstChild.contentWindow;
//		setTimeout(function(){
//			win.document.querySelector(".glass").style.display="none";
//		},500);
		this._show=true;
	};
	box.hide = function() {
//		var win=this.firstChild.contentWindow;
//		win.document.querySelector(".glass").style.display="block";
		this.classList.remove("fromRight");
		this.classList.add("toRight");
		this._show=false;
	};
	
	ui_carSeries.box = box;
	document.body.appendChild(box);
}
//选择完车型，返回车的json
ui_carSeries.finish=function(res){
	ui_carSeries.box.hide();
	var tar=W.getFocus();
	var carName;
	if(res.series!=res.type)
		carName=res.series+" "+res.type;
	else 
		carName=res.type;
	tar.innerText=carName;
	tar.value=res;
}


/**
 * 自动加载控件
 */
function ui_autoLoad(list,load){
	var obj=new WiStormUI("div");
	obj.merge(this);
	obj.className="ui_auto_load";
	obj.innerHTML='正在加载&nbsp;&nbsp;&nbsp;<div class="loading_b"></div>';
	obj._load=load;
	if(!list){
		list=document;
	}
	obj.canLoad=true;
	if(!list._ui_autoLoad)
		list._ui_autoLoad=new Array();
	obj._index=list._ui_autoLoad.length;
	list._ui_autoLoad.push(obj);
	obj._p=list;
	list.addEvent("scroll",ui_autoLoad._scroll);
	return obj;
}
ui_autoLoad._scroll = function() {
	var Otop,autoLoad,se = document.documentElement.clientHeight; //浏览器可见区域高度。
	for(var i=this._ui_autoLoad.length-1;i>=0;i--){
		autoLoad = this._ui_autoLoad[i];
		Otop = autoLoad.getBoundingClientRect().top; //元素顶端到可见区域顶端的距离
		if (se > Otop && autoLoad.canLoad) {
			autoLoad.canLoad = false;
			setTimeout(function() {
				autoLoad.canLoad = true
			}, 2000);
			autoLoad._load();
		}
	}
}

ui_autoLoad.prototype.remove=function(){
	this._p._ui_autoLoad.splice(this._index);
	try{
		this.parentElement.removeChild(this);
	}catch(e){
		//TODO handle the exception
	}
	delete this._p;
}
